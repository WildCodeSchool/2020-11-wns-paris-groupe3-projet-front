import React from 'react';

import { Task, HandleChange, HandleSubmit } from '../types';

interface FormProps {
  task: Task;
  handleChange: HandleChange;
  handleSubmit: HandleSubmit;
}

const FormNewTask = ({ task, handleSubmit, handleChange }: FormProps): JSX.Element => {
  return (
    <div>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom du devoir
          <input type="text" name="taskname" value={task.taskname} onChange={handleChange} />
        </label>
        Uploader un devoir
        <label>
          <input type="file" name="url" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormNewTask;
