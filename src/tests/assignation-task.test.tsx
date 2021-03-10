import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';

import App from '../App';
import NewAssignation from '../pages/NewAssignation';
import { TASK_ASSIGNATIONS, ALL_TASKS, CLASSROOMS } from '../queries';

const ALL_TASK_ASSIGNATIONS_SUCCESS_MOCK = {
  request: {
    query: TASK_ASSIGNATIONS,
  },
  result: {
    data: {
      tasksAssignations: [
        {
          _id: '1',
          task: {
            taskname: 'React pour les nuls',
          },
          affectedTo: {
            classname: 'Dev web',
          },
          end_date: '2021-12-09T04:13:28Z',
        },
        {
          _id: '2',
          task: {
            taskname: 'Node pour les nuls',
          },
          affectedTo: {
            classname: 'Dev web',
          },
          end_date: '2021-11-09T04:13:28Z',
        },
      ],
    },
  },
};

const ALL_TASK_ASSIGNATIONS_ERROR_MOCK = {
  request: {
    query: TASK_ASSIGNATIONS,
  },
  error: {
    name: 'GRAPHQL_VALIDATION_FAILED',
    message: 'Cannot query field "taks" on type "Query". Did you mean "task"?',
  },
};

const ALL_CLASSROOMS_SUCCESS_MOCK = {
  request: {
    query: CLASSROOMS,
  },
  result: {
    data: {
      classrooms: [
        {
          _id: '1',
          classname: 'Dev Web',
          users: {
            _id: '1',
            username: 'Fred',
            speciality: 'Dev',
            role: {
              _id: 1,
            },
          },
        },
        {
          _id: '2',
          classname: 'Data',
          users: {
            _id: '2',
            username: 'Jean',
            speciality: 'Data',
            role: {
              _id: 2,
            },
          },
        },
      ],
    },
  },
};

const ALL_CLASSROOMS_ERROR_MOCK = {
  request: {
    query: CLASSROOMS,
  },
  error: {
    name: 'GRAPHQL_VALIDATION_FAILED',
    message: 'Cannot query field "taks" on type "Query". Did you mean "task"?',
  },
};

const ALL_TASKS_SUCCESS_MOCK = {
  request: {
    query: ALL_TASKS,
  },
  result: {
    data: {
      tasks: [
        {
          _id: '1',
          taskname: 'Pouet',
          creation_date: '2021-12-09T04:13:28Z',
          url: 'my_url',
        },
        {
          _id: '2',
          taskname: 'Pouet Pouet',
          creation_date: '2021-08-22T06:57:38Z',
          url: 'my_url',
        },
      ],
    },
  },
};

const ALL_TASKS_ERROR_MOCK = {
  request: {
    query: ALL_TASKS,
  },
  error: {
    name: 'GRAPHQL_VALIDATION_FAILED',
    message: 'Cannot query field "taks" on type "Query". Did you mean "tasks"?',
  },
};

describe('App', () => {
  describe('when we are into new assignation page', () => {
    it('renders form', async () => {
      render(
        <MockedProvider
          mocks={[ALL_TASK_ASSIGNATIONS_SUCCESS_MOCK, ALL_CLASSROOMS_SUCCESS_MOCK, ALL_TASKS_SUCCESS_MOCK]}
          addTypename={false}
        >
          <NewAssignation />
        </MockedProvider>,
      );

      const form = await waitFor(() => screen.getByRole('form'));
      expect(form).toBeInTheDocument();
    });
  });

  describe('when fetching tasks assignations failed', () => {
    it('renders error', async () => {
      render(
        <MockedProvider mocks={[ALL_TASK_ASSIGNATIONS_ERROR_MOCK, ALL_CLASSROOMS_ERROR_MOCK, ALL_TASKS_ERROR_MOCK]}>
          <App />
        </MockedProvider>,
      );

      const errorMessage = await waitFor(() => screen.getByText('Error...'));
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
