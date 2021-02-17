import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import Calendar from './Calendar';
import FormNewTask from './FormNewTask';

import { Task, HandleChange, HandleSubmit } from '../types';
import { ALL_TASKS, CREATE_TASK } from '../queries';

const Planning = (): JSX.Element => {
  const { loading, error, data, refetch } = useQuery(ALL_TASKS);
  const [createTask] = useMutation(CREATE_TASK);

  const [task, setTask] = useState<Task>({
    taskname: '',
    url: '',
  });

  const handleChange: HandleChange = (e) => {
    const taskTemp = { ...task, [e.target.name]: e.target.value };
    setTask(taskTemp);
  };

  const handleSubmit: HandleSubmit = (e) => {
    e.preventDefault();
    createTask({ variables: { input: task } });
    refetch();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <Calendar events={data.tasks} />
      <FormNewTask task={task} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Planning;
