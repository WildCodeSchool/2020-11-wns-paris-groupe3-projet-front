import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { HandleChange, HandleSubmit } from '../types';
import { CREATE_TASK } from '../queries';

const Upload = (): JSX.Element => {
  const [task, setTask] = useState({
    taskname: '',
    url: '',
  });

  const [createTask] = useMutation(CREATE_TASK);

  const handlePreviewFile = (file: Blob) => {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        setTask({ ...task, url: result });
      }
    };
  };

  const handleChangeTaskname: HandleChange = (e) => {
    setTask({ ...task, taskname: e.target.value });
  };

  const handleFileInputChange: HandleChange = (e) => {
    e.preventDefault();
    if (!e.target.files) return;
    const file = e.target.files[0];
    handlePreviewFile(file);
  };

  const handleSubmit: HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask({ variables: { input: task } });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom du devoir
          <input type="text" name="taskname" value={task.taskname} onChange={handleChangeTaskname} />
        </label>
        Uploader un devoir
        <label>
          <input type="file" name="url" onChange={handleFileInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {task && <img src={task.url} alt="previewFile" style={{ height: '200px' }} />}
    </div>
  );
};

export default Upload;
