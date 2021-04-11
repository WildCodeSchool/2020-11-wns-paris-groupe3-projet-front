import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';

import CreationTask from '../pages/NewTask';

import { CREATE_TASK } from '../queries';

const NEW_TASK_SUCCESS_MOCK = {
  request: {
    query: CREATE_TASK,
    variables: {
      taskname: 'new taskname',
      url: 'myurl',
    },
  },
  result: {
    data: {
      createTask: {
        taskname: 'new taskname',
        url: 'myurl',
        __typename: 'Task',
        _id: '1',
      },
    },
  },
};

describe('NewTask', () => {
  describe('When on creation page', () => {
    it('should render header', () => {
      render(
        <MockedProvider>
          <CreationTask />
        </MockedProvider>,
      );

      const header = screen.getByText('Créer un nouveau devoir');
      expect(header).toBeInTheDocument();
    });

    it('should render text input label', () => {
      render(
        <MockedProvider>
          <CreationTask />
        </MockedProvider>,
      );

      const textInput = screen.getByText('Titre du devoir');
      expect(textInput).toBeInTheDocument();
    });

    it('should render upload box text', () => {
      render(
        <MockedProvider>
          <CreationTask />
        </MockedProvider>,
      );

      const textInput = screen.getByText('Glisser votre devoir ici, ou cliquer pour le sélectionner. *');
      expect(textInput).toBeInTheDocument();
    });
  });

  describe('when creating task succeeded', () => {
    it('should render the form and the submit button', async () => {
      render(
        <MockedProvider mocks={[NEW_TASK_SUCCESS_MOCK]} addTypename={false}>
          <CreationTask />
        </MockedProvider>,
      );

      const form = await waitFor(() => screen.getByRole('form'));
      const button = await waitFor(() => screen.getByRole('button'));
      expect(form).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
