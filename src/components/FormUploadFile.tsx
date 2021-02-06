/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';

import UploadBox from './UploadBox';
import Header from './Header';

import { FormProps } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    submit: {
      backgroundColor: `${theme.palette.primary.main}`,
    },
  }),
);

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
  const classes = useStyles();
  const fileKey = Object.keys(file)[0];

  return (
    <div>
      <Header label="Créer un nouveau devoir" />
      <form onSubmit={handleSubmit}>
        {fileKey === 'taskname' && (
          <TextField id="outlined-basic" label="Titre du devoir" variant="outlined" onChange={handleChange} required />
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
            className={classes.submit}
          >
            Créer
          </Button>
        )}
      </form>
      {error && <p>Quelque chose s'est mal passé. Veuillez recommencer.</p>}
    </div>
  );
};

export default FormUploadFile;
