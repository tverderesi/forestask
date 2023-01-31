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
