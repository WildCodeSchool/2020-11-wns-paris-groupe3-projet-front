import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';

import App from './App';
import { ALL_TASKS } from './queries';

const ALL_TASKS_SUCCESS_MOCK = {
  request: {
    query: ALL_TASKS,
  },
  result: {
    data: {
      tasks: [
        {
          _id: '1',
          title: 'Pouet',
          start: '2021-12-09T04:13:28Z',
          end: '2021-08-22T06:57:38Z',
        },
        {
          _id: '2',
          title: 'Pouet Pouet',
          start: '2021-08-22T06:57:38Z',
          end: '2021-08-22T06:57:38Z',
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
  describe('while fetching tasks', () => {
    it('renders loading', () => {
      render(
        <MockedProvider mocks={[ALL_TASKS_SUCCESS_MOCK]} addTypename={false}>
          <App />
        </MockedProvider>,
      );

      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  describe('when fetching tasks failed', () => {
    it('renders error', async () => {
      render(
        <MockedProvider mocks={[ALL_TASKS_ERROR_MOCK]} addTypename={false}>
          <App />
        </MockedProvider>,
      );

      const errorMessage = await waitFor(() => screen.getByText('Errors'));
      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe('when fetching tasks succeeded', () => {
    it('renders calendar with tasks', async () => {
      render(
        <MockedProvider mocks={[ALL_TASKS_SUCCESS_MOCK]} addTypename={false}>
          <App />
        </MockedProvider>,
      );

      const form = await waitFor(() => screen.getByRole('form'));
      expect(form).toBeInTheDocument();
    });
  });
});
