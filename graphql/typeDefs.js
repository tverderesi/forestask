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

  type ActivityType {
    id: ID!
    name: String!
  }
  interface User {
    id: ID!
    username: String!
    firstName: String!
    lastName: String!
    createdAt: String!
    password: String!
    email: String!
    token: String!
    privilegeLevel: PrivilegeLevel!
  }

  type Student implements User {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    createdAt: String!
    birthday: String!
    profilePicture: String!
    subjects: [Subject]!
    assignments: [Assignment]!
    privilegeLevel: PrivilegeLevel!
    email: String!
    token: String!
    password: String!
  }

  type Teacher implements User {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    createdAt: String!
    birthday: String!
    profilePicture: String!
    subjects: [Subject]!
    privilegeLevel: PrivilegeLevel!
    email: String!
    token: String!
    password: String!
  }

  type Admin implements User {
    id: ID!
    firstName: String!
    lastName: String!
    createdAt: String!
    username: String!
    privilegeLevel: PrivilegeLevel!
    email: String!
    token: String!
    profilePicture: String!
    password: String!
  }

  type Assignment {
    id: ID!
    createdAt: String!
    teacher: String!
    students: [Student]!
    type: ActivityType!
    deadline: String!
  }

  input RegisterInput {
    username: String!
    firstName: String!
    lastName: String!
    birthday: String
    privilegePassword: String
    email: String!
    password: String!
    confirmPassword: String!
    profilePicture: String
  }

  input LogInInput {
    logIn: String!
    password: String!
  }

  type Query {
    getSubjects: [Subject]
  }
  type Mutation {
    addSubject(name: String!, teacher: String, students: [String]): Subject
    deleteSubject(id: ID!): String
    login(logInInput: LogInInput!): User!
    register(registerInput: RegisterInput!): User!
  }
`;

module.exports = typeDefs;
