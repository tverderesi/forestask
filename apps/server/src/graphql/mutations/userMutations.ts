import { mutationWithClientMutationId } from "graphql-relay";
import { GraphQLBoolean, GraphQLEnumType, GraphQLNonNull, GraphQLString } from "graphql";
import { UserModel } from "@/models/User";
import { userType } from "@/graphql/schema/userType";
import { userRoleType } from "../schema/userRoleType";
import bcrypt from "bcrypt";

const createUserMutation = mutationWithClientMutationId({
  name: "CreateUser",
  description: "A mutation to create a new user.",
  inputFields: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The email of the user.",
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The email of the user.",
    },

    role: { type: new GraphQLNonNull(userRoleType) },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The password of the user.",
    },
    confirmPassword: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The password of the user.",
    },
  },
  outputFields: {
    user: {
      type: userType,
      resolve: (user) => user,
    },
  },
  mutateAndGetPayload: async (input) => {
    const { username, role, password, confirmPassword } = input;
    const userExists = await UserModel.findOne({ username });
    if (userExists) {
      throw new Error("The user already exists.");
    }
    if (password !== confirmPassword) {
      throw new Error("The passwords do not match.");
    }
    const user = new UserModel({ username, role, password });
    return await user.save();
  },
});

const updateUserMutation = mutationWithClientMutationId({
  name: "UpdateUser",
  description: "A mutation to update a user.",
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The unique identifier of the user.",
    },
    username: {
      type: GraphQLString,
      description: "The email of the user.",
    },
    role: { type: userRoleType },
    password: {
      type: GraphQLString,
      description: "The password of the user.",
    },
    newPassword: {
      type: GraphQLString,
      description: "The password of the user.",
    },
  },
  outputFields: {
    user: {
      type: userType,
      resolve: (user) => user,
    },
  },
  mutateAndGetPayload: async (input) => {
    const { id, username, role, password, newPassword } = input;

    const user = await UserModel.findById(id);
    if (!user) {
      throw new Error("The user does not exist.");
    }
    const arePasswordsEqual = await bcrypt.compare(password, user.password);
    if (!arePasswordsEqual) {
      throw new Error("The password is incorrect.");
    }

    const updateUserObj = {
      username: username || user.username,
      role: role || user.role,
      password: newPassword ? newPassword : user.password,
    };
    const updatedUser = await UserModel.findByIdAndUpdate(id, updateUserObj, {
      new: true,
      runValidators: true,
    });
  },
});

const deleteUserMutation = mutationWithClientMutationId({
  name: "DeleteUser",
  description: "A mutation to delete a user.",
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The unique identifier of the user.",
    },
  },
  outputFields: {
    success: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async (input) => {
    const { id } = input;
    const user = await UserModel.findById(id);
    if (!user) {
      throw new Error("The user does not exist.");
    }
    await UserModel.findByIdAndDelete(id);
    return { success: true };
  },
});

export const userMutations = { createUserMutation, updateUserMutation, deleteUserMutation };
