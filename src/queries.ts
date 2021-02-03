import { gql } from '@apollo/client';

export const ALL_TASKS = gql`
  query GetAllTasks {
    tasks {
      _id
      taskname
      url
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask($input: InputTask!) {
    createTask(input: $input) {
      _id
      taskname
      url
    }
  }
`;

export const CREATE_RENDER = gql`
  mutation CreateRender($input: InputRender!) {
    createRender(input: $input) {
      _id
      url
      task
      user
    }
  }
`;

export const CREATE_CORRECTION = gql`
  mutation CreateCorrection($input: InputCorrection!) {
    createCorrection(input: $input) {
      _id
      task
      url
      user
    }
  }
`;
