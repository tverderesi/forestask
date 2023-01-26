const { buildSchema } = require('graphql-relay-js');

const typeDefs = buildSchema(`
  type Subject {
    id: ID!
    name: String!
  }

  type Subjects {
    subjects: [Subject]!
  }

  type Query {
    getSubjects: [Subject]
  }
`);
