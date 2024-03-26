import { GraphQLSchema } from "graphql";
import { queryType } from "@/graphql/queries/index";
import { mutationType } from "@/graphql/mutations/index";

export const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});
