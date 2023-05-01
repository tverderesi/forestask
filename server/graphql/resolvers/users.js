/**
 * A module that handles user authentication.
 *
 * @format
 * @module auth/resolvers/users
 */

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");
require("dotenv").config();
const { isEmail } = require("../../utils/misc");

const User = require("../../models/User");
const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../utils/validators");

const generateToken = (user) =>
  jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
      privilegeLevel: user.privilegeLevel,
      profilePicture: user.profilePicture,
    },
    process.env.SECRET_KEY,
    { expiresIn: "24h" }
  );

module.exports = {
  Query: {
    async getUser(_, { id }) {
      const user = await User.findById(id);
      if (!user) {
        throw new Error(`User with id ${id} not found`);
      }
      return user;
    },
    async getUsers() {
      try {
        const users = await User.find();
        return users;
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Mutation: {
    async login(_, { logInInput: { logIn, password } }) {
      const errors = {};

      let user;

      if (validateLoginInput(logIn, password).valid) {
        if (isEmail(logIn)) {
          user = await User.findOne({ email: logIn });
          if (!user)
            throw new UserInputError(
              (errors.General = "User with email not found!")
            );
        } else {
          user = await User.findOne({ username: logIn });
          if (!user) {
            throw new UserInputError(
              (errors.General = "User with username not found!")
            );
          }
        }
      }

      const match = bcrypt.compareSync(password, user.password);
      if (!match) {
        throw new UserInputError("Wrong credentials.", {
          errors: { password: "Wrong password" },
        });
      }

      const token = generateToken(user);
      const typename =
        user.privilegeLevel[0] + user.privilegeLevel.slice(1).toLowerCase();
      return {
        __typename: typename,
        ...user._doc,
        id: user.id,
        token,
      };
    },

    async register(
      _, // parent argument
      {
        registerInput: {
          username,
          firstName,
          lastName,
          birthday,
          confirmPrivilegePassword,
          privilegePassword,
          email,
          password,
          confirmPassword,
          profilePicture,
          selectedPrivilegeLevel,
        },
      } // args argument
    ) {
      // validate user data
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword,
        privilegePassword,
        confirmPrivilegePassword,
        selectedPrivilegeLevel
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      // make sure username doesn't already exist
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("Username is taken.", {
          errors: {
            username: "This username is taken!",
          },
        });
      }

      // make sure email doesn't already exist
      const uniqueEmail = await User.findOne({ email });

      if (uniqueEmail) {
        throw new UserInputError("Email is already registered.", {
          errors: {
            username: "This email is already registered.",
          },
        });
      }

      // hash password and create an auth token
      //TODO generate random salt and encrypt it.
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        email,
        username,
        password,
        profilePicture,
        firstName,
        lastName,
        privilegeLevel: selectedPrivilegeLevel,
        birthday: new Date(birthday).toISOString(),
        createdAt: new Date().toISOString(),
      });

      const savedUser = await newUser.save();
      const token = generateToken(savedUser);

      switch (savedUser.privilegeLevel) {
        case "STUDENT":
          return {
            __typename: "Student",
            ...savedUser._doc,
            id: savedUser._id,
            token,
            assignments: [],
            subjects: [],
          };
        case "TEACHER":
          return {
            __typename: "Teacher",
            ...savedUser._doc,
            id: savedUser._id,
            token,
            subjects: [],
            assignments: [],
          };
        case "ADMIN":
          return {
            __typename: "Admin",
            ...savedUser._doc,
            id: savedUser._id,
            token,
          };

        default:
          throw new Error(
            `Invalid privilege level: ${savedUser.privilegeLevel}`
          );
      }
    },
  },

  User: {
    __resolveType(user) {
      switch (user.privilegeLevel) {
        case "STUDENT":
          return "Student";
        case "TEACHER":
          return "Teacher";
        case "ADMIN":
          return "Admin";
        default:
          throw new Error(`Unknown privilege level: ${user.privilegeLevel}`);
      }
    },
  },
};
