import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import CloudDoneOutlinedIcon from '@material-ui/icons/CloudDoneOutlined';

import { UploadBoxProps } from '../types';

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
  }),
);

const UploadBox = ({ file, fileType, getRootProps, getInputProps, isDragActive }: UploadBoxProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div
      {...getRootProps()}
      className={`${file.url.length === 0 ? classes.dropzone : classes.hasFile} ${
        isDragActive ? classes.active : null
      }`}
    >
      {file.url.length === 0 ? (
        <>
          <p>Glisser votre {fileType} ici, ou cliquer pour le sélectionner. *</p>
          <CloudUploadOutlinedIcon style={{ fontSize: 50 }} />
        </>
      ) : (
        <>
          <p>
            Votre {fileType} est sélectionné. Glisser votre {fileType} ici, ou cliquer pour le modifier.
          </p>
          <CloudDoneOutlinedIcon style={{ fontSize: 50 }} />
        </>
      )}
      <input {...getInputProps()} />
    </div>
  );
};

export default UploadBox;
