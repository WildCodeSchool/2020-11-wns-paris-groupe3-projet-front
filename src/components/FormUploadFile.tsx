/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { CircularProgress } from '@material-ui/core';

import UploadBox from './UploadBox';

import { FormProps } from 'types';

import { TextInput, Form, Error, ButtonForm } from '../styles/form';

const FormUploadFile = ({
  file,
  handleSubmit,
  handleChange,
  isLoading,
  error,
  getRootProps,
  getInputProps,
  isDragActive,
}: FormProps): JSX.Element => {
  const fileKey = Object.keys(file)[0];

  return (
    <div>
      <Form onSubmit={handleSubmit} aria-label="form">
        {fileKey === 'taskname' && (
          <TextInput id="outlined-basic" label="Titre du devoir" variant="outlined" onChange={handleChange} required />
        )}
        <UploadBox
          file={file}
          fileType="devoir"
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          isDragActive={isDragActive}
        />
        {isLoading ? (
          <CircularProgress size={24} />
        ) : (
          <ButtonForm
            type="submit"
            disabled={file.url.length === 0 || (fileKey === 'taskname' && fileKey.length === 0)}
          >
            Créer
          </ButtonForm>
        )}
        {error && <Error>Quelque chose s'est mal passé. Veuillez recommencer.</Error>}
      </Form>
    </div>
  );
};

export default FormUploadFile;
