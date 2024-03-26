import { UserModel } from "@/models/User";
import { GraphQLInterfaceType } from "graphql";
import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { nodeInterface } from "@/graphql/schema/nodeType";
import { userRoleType } from "./userRoleType";
export const userType = new GraphQLObjectType<UserModel, any>({
  name: "User",
  description:
    "A user of the appplication. It can be an admin, which can manage the videos, or a regular user, which can only watch the videos.",
  interfaces: (): GraphQLInterfaceType[] => [nodeInterface],
  fields: () => ({
    id: globalIdField("User"),
    username: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The email of the user.",
      resolve: (user) => user.username,
    },
    role: {
      type: userRoleType,
      description: "The role of the user.",
      resolve: (user) => user.role,
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The password of the user.",
      resolve: (user) => user.password,
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The date when the user was created.",
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The date when the user was last updated.",
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The first name of the user.",
      resolve: (user) => user.firstName,
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The last name of the user.",
      resolve: (user) => user.lastName,
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The email of the user.",
      resolve: (user) => user.email,
    },
    birthday: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The birthday of the user.",
      resolve: (user) => user.birthday,
    },
    profilePicture: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The profile picture of the user.",
      resolve: (user) => user.profilePicture,
    },
    tasks: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The tasks of the user.",
      resolve: (user) => user.tasks,
    },
  }),
});

export const userConnection = connectionDefinitions({
  name: "User",
  nodeType: userType,
});
