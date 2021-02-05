import React from 'react';

import { Task, HandleChange, HandleSubmit, GetRootProps, GetInputProps } from '../types';

interface FormProps {
  task: Task;
  handleChange: HandleChange;
  handleSubmit: HandleSubmit;
  isLoading: boolean;
  getRootProps: GetRootProps;
  getInputProps: GetInputProps;
  isDragActive: boolean;
}

const FormNewTask = ({
  task,
  handleSubmit,
  handleChange,
  isLoading,
  getRootProps,
  getInputProps,
  isDragActive,
}: FormProps): JSX.Element => {
  return (
    <div>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom du devoir
          <input type="text" name="taskname" value={task.taskname} onChange={handleChange} />
        </label>
        Uploader un devoir
        <div {...getRootProps()} style={{ border: '2px dashed salmon', height: '200px' }}>
          <p>Drag n drop some files here, or click to select files</p>
          <input {...getInputProps()} />
        </div>
        {isLoading ? <p>loading...</p> : <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default FormNewTask;
