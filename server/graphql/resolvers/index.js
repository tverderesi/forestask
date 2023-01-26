/**
 * This module exports the resolvers for all GraphQL types.
 *
 * @module resolvers
 */

// Import the resolvers for each type
const subjectsResolvers = require('./subjects');

module.exports = {
  /**
   * The resolvers for the Query type.
   *
   * @type {Object}
   */
  Query: {
    // Add the Query resolvers for the Post type
    ...subjectsResolvers.Query,
  },
};
