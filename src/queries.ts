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
        firstname
        lastname
        email
        speciality {
          speciality_name
        }
        role {
          role_name
        }
      }
    }
  }
`;

export const CLASSROOMS_BY_USER_ID = gql`
  query ClassroomByUserId($_id: ID!) {
    classroomByUserId(_id: $_id) {
      _id
      classname
      users {
        _id
        firstname
        lastname
        role {
          _id
          role_name
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
