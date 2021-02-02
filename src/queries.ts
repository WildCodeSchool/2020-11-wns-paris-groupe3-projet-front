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

export const CREATE_UPLOAD_FILE_TEST = gql`
  mutation CreateUploadFileTest($input: InputUploadFileTest!) {
    createUploadFileTest(input: $input) {
      _id
      url
    }
  }
`;
