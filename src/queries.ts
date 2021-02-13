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
      title
      start
      end
    }
  }
`;

export const ALL_CLASSROOMS = gql`
  query Classrooms {
    classrooms {
      _id
      classname
      users {
        _id
        username
      }
    }
  }
`;

export const CREATE_ASSIGNATION = gql`
  mutation CreateAssignation($input: InputTaskAssignation!) {
    createAssignation(input: $input) {
      _id
      task
      classroom
    }
  }
`;
