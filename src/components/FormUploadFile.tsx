/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Button from '@material-ui/core/Button';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';

import UploadBox from './UploadBox';

import { FormProps } from '../types';

import { TextInput, Form, Error } from '../styles/form';

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
      <Form onSubmit={handleSubmit}>
        {fileKey === 'taskname' && (
          <TextInput id="outlined-basic" label="Titre du devoir" variant="outlined" onChange={handleChange} />
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
          <Button
            type="submit"
            startIcon={<SaveOutlinedIcon />}
            disabled={file.url.length === 0 || (fileKey === 'taskname' && fileKey.length === 0)}
          >
            Créer
          </Button>
        )}
      </Form>
      {error && <Error>Quelque chose s'est mal passé. Veuillez recommencer.</Error>}
    </div>
  );
};

export default FormUploadFile;