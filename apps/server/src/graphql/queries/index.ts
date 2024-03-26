import { userQueries } from "@/graphql/queries/userQueries";
import { GraphQLObjectType } from "graphql";
import { nodeField, nodesField } from "../schema/nodeType";

export const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...userQueries,
    node: nodeField,
    nodes: nodesField,
  },
});
