import { userConnection, userType } from "@/graphql/schema/userType";
import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLInputObjectType, GraphQLString, GraphQLInt } from "graphql";
import { UserModel } from "@/models/User";
import { fromGlobalId, connectionFromArray } from "graphql-relay";
import { QueryFilterType, createQueryFilters } from "@/utils/createQueryFilters";
import { graphQLEqualityInputType } from "../utils/graphQLEqualityInputType";
import { userRoleType } from "../schema/userRoleType";

export const userQueries = {
  user: {
    type: userType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: async (_: any, args: { id: string }) => {
      const { id } = fromGlobalId(args.id);
      return await UserModel.findById(id);
    },
  },
  users: {
    type: new GraphQLNonNull(userConnection.connectionType),
    args: {
      filters: {
        type: new GraphQLInputObjectType({
          name: "UserFilters",
          fields: {
            email: { type: GraphQLString },
            firstName: { type: GraphQLString },
            lastName: { type: GraphQLString },
            birthday: { type: GraphQLString },
            profilePicture: { type: GraphQLString },
            tasks: { type: new GraphQLList(GraphQLString) },
            username: { type: GraphQLString },
            role: { type: userRoleType },
            createdAt: { type: GraphQLString },
            updatedAt: { type: GraphQLString },
          },
        }),
      },
      sort: {
        type: new GraphQLInputObjectType({
          name: "UserSort",
          fields: {
            field: { type: GraphQLString },
            order: { type: GraphQLString },
          },
        }),
      },
      equalityType: {
        type: new GraphQLInputObjectType({
          name: "UserEqualityType",
          fields: {
            field: { type: GraphQLString },
            order: graphQLEqualityInputType,
          },
        }),
      },
      pagination: {
        type: new GraphQLInputObjectType({
          name: "UserPagination",
          fields: {
            first: { type: GraphQLInt },
            last: { type: GraphQLInt },
            before: { type: GraphQLString },
            after: { type: GraphQLString },
          },
        }),
      },
    },
    resolve: async (_: any, { filters, sort, first, last, before, after, equalityType }: QueryFilterType<UserModel>) => {
      let queryFilters = {};
      const querySort = {} as any;
      const defaultPagination = { first: first ?? 10, last: last ?? null, before: before ?? "", after: after ?? "" };
      const fieldTypes = {
        username: "regex",
        role: "regex",
        createdAt: "date",
        updatedAt: "date",
      };
      if (filters) {
        queryFilters = createQueryFilters(fieldTypes, filters, equalityType);
      }
      if (sort && sort.field) {
        querySort[sort.field] = sort.order === "asc" ? 1 : -1;
      }
      const users = await UserModel.find(queryFilters).sort(querySort);
      const connection: any = connectionFromArray(users, defaultPagination);
      return connection;
    },
  },
};
