const subjectResolvers = require('./subjects');

module.exports = {
  Query: {
    ...subjectResolvers.Query,
  },
  Mutation: {
    ...subjectResolvers.Mutation,
  },
};
