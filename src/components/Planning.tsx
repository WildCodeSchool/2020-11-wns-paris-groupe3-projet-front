import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import FormNewTask from './FormNewTask';

import { Task, HandleChange, HandleSubmit } from '../types';
import { CREATE_TASK } from '../queries';

const Planning = (): JSX.Element => {
  const [task, setTask] = useState<Task>({
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

  const handleChange: HandleChange = (e) => {
    e.preventDefault();
    if (e.target.name === 'taksname') {
      setTask({ ...task, taskname: e.target.value });
    }
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
      <FormNewTask task={task} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Planning;
