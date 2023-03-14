const subjectResolvers = require("./subjects");
const userResolvers = require("./users");

module.exports = {
  Query: {
    ...subjectResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...subjectResolvers.Mutation,
    ...userResolvers.Mutation,
  },
  User: {
    ...userResolvers.User,
  },
};
