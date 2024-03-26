import { GraphQLObjectType } from "graphql";
import { userMutations } from "@/graphql/mutations/userMutations";

export const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...userMutations,
  },
});
