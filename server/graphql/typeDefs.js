const gql = require('graphql-tag');

const typeDefs = gql`
  type Subject {
    id: ID!
    name: String!
  }

  type SubjectsConnection {
    edges: [SubjectEdge]
    totalCount: Int
  }

  type SubjectEdge {
    node: Subject
    cursor: String
  }

  type Query {
    subjects(first: Int, after: String, name: String): SubjectsConnection
  }
`;
