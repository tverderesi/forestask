import { GraphQLEnumType } from "graphql";
export const userRoleType = new GraphQLEnumType({
  name: "UserRole",
  values: { admin: { value: "admin" }, user: { value: "user" } },
});
