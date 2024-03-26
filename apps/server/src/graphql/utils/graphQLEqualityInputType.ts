import { GraphQLEnumType } from "graphql";

export const graphQLEqualityInputType = {
  type: new GraphQLEnumType({
    name: "EqualityType",
    values: {
      gte: { value: "gte" },
      lte: { value: "lte" },
      gt: { value: "gt" },
      lt: { value: "lt" },
      eq: { value: "eq" },
      ne: { value: "ne" },
    },
  }),
};
