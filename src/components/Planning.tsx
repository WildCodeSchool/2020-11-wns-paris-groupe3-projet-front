import React, { useState } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';
import moment from 'moment';
import Agenda from './Agenda';
import FormNewTask from './FormNewTask';

const ALL_TASKS = gql`
  query GetAllTasks {
    allTasks {
      id
      title
      start
      end
    }
  }
`;

const CREATE_TASK = gql`
  mutation CreateTask($input: InputTask!) {
    createTask(input: $input) {
      id
      title
      start
      end
    }
  }
`;

export type TaskProps = {
  start: Date;
  end: Date;
  title: string;
};

export type HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;

const Planning = (): JSX.Element => {
  const { loading, error, data, refetch } = useQuery(ALL_TASKS);
  const [createTask] = useMutation(CREATE_TASK);

  const [task, setTask] = useState<TaskProps>({
    title: '',
    start: moment().toDate(),
    end: moment().add(1, 'days').toDate(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const taskTemp = { ...task, [e.target.name]: e.target.value };
    setTask(taskTemp);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    createTask({ variables: { input: task } });
    refetch();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <Agenda events={data.allTasks} />
      <FormNewTask task={task} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Planning;
