/** @format */

import gql from 'graphql-tag';

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
