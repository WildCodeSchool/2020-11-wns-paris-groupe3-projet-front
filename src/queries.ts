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

export const CREATE_TASK_ASSIGNATION = gql`
  mutation createAssignation($input: InputTaskAssignation!) {
    createAssignation(input: $input) {
      task {
        taskname
      }
      end_date
      affectedTo {
        classname
      }
    }
  }
`;

export const TASK_ASSIGNATIONS = gql`
  query tasksAssignations {
    tasksAssignations {
      _id
      task {
        taskname
      }
      affectedTo {
        classname
      }
      end_date
    }
  }
`;

export const CLASSROOMS = gql`
  query classrooms {
    classrooms {
      _id
      classname
      users {
        _id
        username
        speciality
        role {
          _id
        }
      }
    }
  }
`;
