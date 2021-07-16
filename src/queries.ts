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

export const ASSIGNMENTS = gql`
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
        firstname
        lastname
        email
        speciality {
          _id
        }
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

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      firstname
      lastname
      email
      creation_date
      token
      role {
        role_name
      }
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

export const USERS = gql`
  query users {
    users {
      _id
      firstname
      lastname
      role {
        role_name
      }
      creation_date
      status
    }
  }
`;
