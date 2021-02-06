import React from 'react';

import { UploadBoxProps } from '../types';

import { Container, TextHelper, DropZone, CloudUpload, CloudDone } from '../styles/upload-box';

const UploadBox = ({ file, fileType, getRootProps, getInputProps, isDragActive }: UploadBoxProps): JSX.Element => {
  return (
    <Container>
      <DropZone {...getRootProps()} isDragActive={isDragActive} hasFile={file.url.length !== 0}>
        {file.url.length === 0 ? (
          <>
            <p>Glisser votre {fileType} ici, ou cliquer pour le sélectionner. *</p>
            <CloudUpload />
          </>
        ) : (
          <>
            <p>
              Votre {fileType} est sélectionné. Glisser votre {fileType} ici, ou cliquer pour le modifier.
            </p>
            <CloudDone />
          </>
        )}
        <input {...getInputProps()} />
      </DropZone>
      <TextHelper>Fichiers acceptés : .pdf, .doc et .docx</TextHelper>
    </Container>
  );
};

export default UploadBox;
