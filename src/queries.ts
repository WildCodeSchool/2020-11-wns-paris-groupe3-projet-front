import { gql } from '@apollo/client';

export const ALL_TASKS = gql`
  query tasks {
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
