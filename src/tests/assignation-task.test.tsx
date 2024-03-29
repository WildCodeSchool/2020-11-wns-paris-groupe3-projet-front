import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';

import NewAssignation from 'pages/NewAssignation';
import { ALL_TASKS, CLASSROOMS } from 'queries';

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
            firstname: 'Fred',
            speciality: {
              _id: 1,
            },
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
            firstname: 'Jean',
            speciality: {
              _id: 2,
            },
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

describe('NewAssignation', () => {
  describe('while fetching data to create a new assignation', () => {
    it('renders loading', () => {
      render(
        <MockedProvider mocks={[ALL_CLASSROOMS_SUCCESS_MOCK, ALL_TASKS_SUCCESS_MOCK]} addTypename={false}>
          <NewAssignation />
        </MockedProvider>,
      );

      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  describe('while fetching data to create a new assignation failed', () => {
    it('renders error', async () => {
      render(
        <MockedProvider mocks={[ALL_CLASSROOMS_ERROR_MOCK, ALL_TASKS_ERROR_MOCK]}>
          <NewAssignation />
        </MockedProvider>,
      );

      const errorMessage = await waitFor(() => screen.getByText('Error...'));
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
