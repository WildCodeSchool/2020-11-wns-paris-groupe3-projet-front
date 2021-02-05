import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/client';

import FormNewTask from './FormNewTask';

import { Task, HandleChange, HandleSubmit } from '../types';
import { CREATE_TASK } from '../queries';

const Planning = (): JSX.Element => {
  const [createTask] = useMutation(CREATE_TASK);
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState<Task>({
    taskname: '',
    url: '',
  });

  const handleChange: HandleChange = (e) => {
    e.preventDefault();
    setTask({ ...task, taskname: e.target.value });
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          setTask({ ...task, url: result });
        }
      };
    },
    [task],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.pdf',
    multiple: false,
  });

  const handleSubmit: HandleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await createTask({ variables: { input: task } });
      console.log(task);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <FormNewTask
        task={task}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        isDragActive={isDragActive}
      />
    </div>
  );
};

export default Planning;
