import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';

import FormUploadFile from 'components/FormUploadFile';
import UploadBox from 'components/UploadBox';

import { CREATE_TASK } from 'queries';

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

const handleChange = jest.fn();
const handleSubmit = jest.fn();
const getRootProps = jest.fn();
const getInputProps = jest.fn();
const isDragActive = false;
const isLoading = false;

describe('FormUploadFile', () => {
  describe('When on creation page', () => {
    it('should render info on accepted files', () => {
      const task = {
        _id: '1',
        taskname: 'mytask',
        url: 'myurl',
      };
      const error = false;
      render(
        <MockedProvider>
          <FormUploadFile
            file={task}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            error={error}
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
          />
        </MockedProvider>,
      );

      const infos = screen.getByText('Fichiers acceptés : .pdf, .doc et .docx');
      expect(infos).toBeInTheDocument();
    });

    it('should render erro text', () => {
      const task = {
        _id: '1',
        taskname: 'mytask',
        url: 'myurl',
      };
      const error = true;
      render(
        <MockedProvider>
          <FormUploadFile
            file={task}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            error={error}
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
          />
        </MockedProvider>,
      );

      const texterror = screen.getByText("Quelque chose s'est mal passé. Veuillez recommencer.");
      expect(texterror).toBeInTheDocument();
    });

    it('should render upload box text', () => {
      const file = {
        taskname: 'mytask',
        url: 'myurl',
      };
      render(
        <MockedProvider>
          <UploadBox
            file={file}
            fileType="devoir"
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
          />
        </MockedProvider>,
      );

      const textInput = screen.getByText(
        'Votre devoir est sélectionné. Glisser votre devoir ici, ou cliquer pour le modifier.',
      );
      expect(textInput).toBeInTheDocument();
    });
  });

  describe('when creating task succeeded', () => {
    it('should render the form and the submit button', async () => {
      const task = {
        _id: '1',
        taskname: 'mytask',
        url: 'myurl',
      };
      const error = false;
      render(
        <MockedProvider mocks={[NEW_TASK_SUCCESS_MOCK]} addTypename={false}>
          <FormUploadFile
            file={task}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            error={error}
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
          />
        </MockedProvider>,
      );

      const form = await waitFor(() => screen.getByRole('form'));
      const button = await waitFor(() => screen.getByRole('button'));
      expect(form).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
