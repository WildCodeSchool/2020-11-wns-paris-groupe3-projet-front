import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import moment from 'moment';

import Agenda from './Agenda';
import FormNewTask from './FormNewTask';

import { Task, HandleChange, HandleSubmit } from '../types';
import { ALL_TASKS, CREATE_TASK } from '../queries';

const Planning = (): JSX.Element => {
  const { loading, error, data, refetch } = useQuery(ALL_TASKS);
  const [createTask] = useMutation(CREATE_TASK);

  const [task, setTask] = useState<Task>({
    title: '',
    start: moment().toDate(),
    end: moment().add(1, 'days').toDate(),
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
      <Agenda events={data.tasks} />
      <FormNewTask task={task} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Planning;
