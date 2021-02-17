import { gql } from '@apollo/client';

export const ALL_TASKS = gql`
  query GetAllTasks {
    tasks {
      _id
      taskname
      creation_date
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
      creation_date
    }
  }
`;
