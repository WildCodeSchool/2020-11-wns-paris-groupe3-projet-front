import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { HandleChange, HandleSubmit } from '../types';
import { CREATE_UPLOAD_FILE_TEST } from '../queries';

const Upload = (): JSX.Element => {
  const fileInput = '';
  const [preview, setPreview] = useState({ url: '' });
  const [createUploadFileTest] = useMutation(CREATE_UPLOAD_FILE_TEST);

  const handlePreviewFile = (file: Blob) => {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        setPreview({ url: result });
      }
    };
  };

  const handleFileInputChange: HandleChange = (e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    handlePreviewFile(file);
  };

  const handleSubmit: HandleSubmit = async (e) => {
    e.preventDefault();
    if (!preview) return;
    await createUploadFileTest({ variables: { input: preview } });
  };

  return (
    <div>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" value={fileInput} onChange={handleFileInputChange} />
        <button type="submit">Submit</button>
      </form>
      {preview && <img src={preview.url} alt="previewFile" style={{ height: '200px' }} />}
    </div>
  );
};

export default Upload;
