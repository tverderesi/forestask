/** @format */

import gql from "graphql-tag";

export const REGISTER_USER_MUTATION = gql`
  mutation Register($registerInput: RegisterInput!) {
    register(registerInput: $registerInput) {
      id
      username
      firstName
      lastName
      createdAt
      email
      privilegeLevel
      token
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation Login($logInInput: LogInInput!) {
    login(logInInput: $logInInput) {
      ... on Student {
        id
        firstName
        lastName
        username
        createdAt
        birthday
        profilePicture
        subjects {
          id
          name
          teacher
          students {
            id
            firstName
            lastName
            username
            createdAt
            birthday
            profilePicture
            privilegeLevel
            email
            token
            password
          }
        }
        assignments {
          id
          createdAt
          teacher
          type {
            id
            name
          }
          deadline
        }
        privilegeLevel
        email
        token
        password
      }
      ... on Teacher {
        id
        firstName
        lastName
        username
        createdAt
        birthday
        profilePicture
        subjects {
          id
          name
          teacher
          students {
            id
            firstName
            lastName
            username
            createdAt
            birthday
            profilePicture
            assignments {
              id
              createdAt
              teacher
              type {
                id
                name
              }
              deadline
            }
            privilegeLevel
            email
            token
            password
          }
        }
        privilegeLevel
        email
        token
        password
      }
      ... on Admin {
        id
        firstName
        lastName
        createdAt
        username
        privilegeLevel
        email
        token
        profilePicture
        password
      }
    }
  }
`;

export const GET_USER_QUERY = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      firstName
      lastName
      createdAt
      password
      email
      privilegeLevel
      profilePicture
      birthday
    }
  }
`;

export const GET_USERS_QUERY = gql`
  query GetUsers {
    getUsers {
      id
      username
      firstName
      lastName
      createdAt
      password
      privilegeLevel
      token
      email
      profilePicture
      birthday
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($id: ID!, $updateUserInput: UpdateUserInput!) {
    updateUser(id: $id, updateUserInput: $updateUserInput) {
      id
      username
      firstName
      lastName
      createdAt
      password
      email
      privilegeLevel
      profilePicture
      birthday
    }
  }
`;
