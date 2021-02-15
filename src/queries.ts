import { gql } from '@apollo/client';

export const ALL_TASKS = gql`
  query GetAllTasks {
    tasks {
      _id
      title
      start
      end
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask($input: InputTask!) {
    createTask(input: $input) {
      _id
      title
      start
      end
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      firstname
      lastname
      email
      creation_date
      token
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register($input: InputRegister!) {
    register(input: $input) {
      _id
      firstname
      lastname
      email
      creation_date
      token
    }
  }
`;
