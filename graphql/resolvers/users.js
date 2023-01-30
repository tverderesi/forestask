/**
 * A module that handles user authentication.
 *
 * @module auth/resolvers/users
 */

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
require('dotenv').config();
const { getPrivilegeLevel } = require('../../utils/misc');

const User = require('../../models/User');
const {
  validateRegisterInput,
  validateLoginInput,
} = require('../../utils/validators');

const generateToken = user =>
  jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
      profilePicture: user.profilePicture,
    },
    process.env.SECRET_KEY,
    { expiresIn: '24h' }
  );

module.exports = {
  Mutation: {
    async login(_, { username, password }) {
      const { errors, valid } = validateLoginInput(username, password);
      const user = await User.findOne({ username });

      if (!valid) {
        throw new UserInputError('Wrong credentials.', { errors });
      }

      if (!user) {
        errors.general = 'User not found!';
        throw new UserInputError('User not found.', { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        throw new UserInputError('Wrong credentials.', { errors });
      }

      const token = generateToken(user);

      return {
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
          fullName,
          birthday,
          privilegePassword,
          email,
          password,
          confirmPassword,
          profilePicture,
        },
      } // args argument
    ) {
      const privilegeLevel = getPrivilegeLevel(privilegePassword);
      // validate user data
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword,
        birthday,
        privilegeLevel
      );
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      // make sure username doesn't already exist
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError('Username is taken.', {
          errors: {
            username: 'This username is taken!',
          },
        });
      }

      // make sure email doesn't already exist
      const uniqueEmail = await User.findOne({ email });
      if (uniqueEmail) {
        throw new UserInputError('Email is already registered.', {
          errors: {
            username: 'This email is already registered.',
          },
        });
      }

      // hash password and create an auth token
      password = await bcrypt.hash(password, 12);
      const newUser = new User({
        email,
        username,
        password,
        profilePicture,
        fullName,
        privilegeLevel,
        birthday: new Date(birthday).toISOString(),
        createdAt: new Date().toISOString(),
      });

      const savedUser = await newUser.save();
      const token = generateToken(savedUser);

      switch (savedUser.privilegeLevel) {
        case savedUser.privilegeLevel === 'STUDENT':
          console.log(savedUser.privilegeLevel === 'STUDENT');
          return {
            ...savedUser._doc,
            id: savedUser._id,
            token,
          };
        case savedUser.privilegeLevel === 'TEACHER':
          console.log(savedUser.privilegeLevel === 'TEACHER');
          return {
            ...savedUser._doc,
            id: savedUser._id,
            token,
          };
        case savedUser.privilegeLevel === 'ADMIN':
          console.log(savedUser.privilegeLevel === 'ADMIN');
          return {
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
};
