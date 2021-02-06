/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import CloudDoneOutlinedIcon from '@material-ui/icons/CloudDoneOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';

import { Task, HandleChange, HandleSubmit, GetRootProps, GetInputProps } from '../types';

interface FormProps {
  task: Task;
  handleChange: HandleChange;
  handleSubmit: HandleSubmit;
  isLoading: boolean;
  isUploaded: boolean;
  error: boolean;
  getRootProps: GetRootProps;
  getInputProps: GetInputProps;
  isDragActive: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dropzone: {
      border: `2px dashed ${theme.palette.primary.main}`,
      height: '150px',
      width: '200px',
      margin: '50px auto',
      borderRadius: '5px',
      outline: 'none',
      cursor: 'pointer',
    },
    active: {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
    hasFile: {
      border: `2px solid ${theme.palette.secondary.main}`,
      height: '150px',
      width: '200px',
      margin: '50px auto',
      borderRadius: '5px',
      outline: 'none',
      cursor: 'pointer',
    },
    submit: {
      backgroundColor: `${theme.palette.primary.main}`,
    },
  }),
);

const FormNewTask = ({
  task,
  handleSubmit,
  handleChange,
  isLoading,
  isUploaded,
  error,
  getRootProps,
  getInputProps,
  isDragActive,
}: FormProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <h1>Créer un nouveau devoir</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Titre du devoir"
          variant="outlined"
          type="text"
          name="taskname"
          value={task.taskname}
          onChange={handleChange}
          required
        />
        <div
          {...getRootProps()}
          className={`${task.url.length === 0 ? classes.dropzone : classes.hasFile} ${
            isDragActive ? classes.active : null
          }`}
        >
          {task.url.length === 0 ? (
            <>
              <p>Glisser votre devoir ici, ou cliquer pour le sélectionner. *</p>
              <CloudUploadOutlinedIcon style={{ fontSize: 50 }} />
            </>
          ) : (
            <>
              <p>Votre devoir est sélectionné. Glisser votre devoir ici, ou cliquer pour le modifier.</p>
              <CloudDoneOutlinedIcon style={{ fontSize: 50 }} />
            </>
          )}
          <input {...getInputProps()} />
        </div>
        {isLoading ? (
          <CircularProgress size={24} />
        ) : (
          <Button
            type="submit"
            startIcon={<SaveOutlinedIcon />}
            disabled={task.url.length === 0 || task.taskname.length === 0}
            className={classes.submit}
          >
            'Enregistrer'
          </Button>
        )}
      </form>
      {error && <p>Quelque chose s'est mal passé. Veuillez recommencer.</p>}
    </div>
  );
};

export default FormNewTask;
