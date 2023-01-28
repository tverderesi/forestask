const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Subject {
    id: ID!
    name: String!
    teacher: String
    students: [Student]!
  }

  type Student {
    id: ID!
    name: String!
    createdAt: String!
    dateBirth: String!
    subjects: [Subject]!
    totalXP: Int!
  }

  type Teacher {
    id: ID!
    createdAt: String!
    dateBirth: String!
    subjects: [Subject]!
  }

  type ActivityType {
    id: ID!
    name: String!
  }

  type Assignment {
    id: ID!
    createdAt: String!
    teacher: String!
    students: [Student]!
    type: ActivityType!
  }

  type Query {
    getSubjects: [Subject]
  }
  type Mutation {
    addSubject(name: String!, teacher: String, students: [String]): Subject
    deleteSubject(id: ID!): String
  }
`;

module.exports = typeDefs;
