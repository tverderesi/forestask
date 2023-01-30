const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Subject {
    id: ID!
    name: String!
    teacher: String
    students: [Student]!
  }
  enum PrivilegeLevel {
    STUDENT
    TEACHER
    ADMIN
  }

  interface User {
    id: ID!
    username: String!
    createdAt: String!
    privilegeLevel: PrivilegeLevel!
  }

  type ActivityType {
    id: ID!
    name: String!
  }

  type Student implements User {
    id: ID!
    fullName: String!
    username: String!
    createdAt: String!
    dateBirth: String!
    profilePicture: String!
    subjects: [Subject]!
    totalXP: Int!
    privilegeLevel: PrivilegeLevel!
  }

  type Teacher implements User {
    id: ID!
    fullName: String!
    username: String!
    createdAt: String!
    dateBirth: String!
    profilePicture: String!
    subjects: [Subject]!
    privilegeLevel: PrivilegeLevel!
  }

  type Admin implements User {
    id: ID!
    createdAt: String!
    username: String!
    privilegeLevel: PrivilegeLevel!
  }

  type Assignment {
    id: ID!
    createdAt: String!
    teacher: String!
    students: [Student]!
    type: ActivityType!
    deadline: String!
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
