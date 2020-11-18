import React from 'react';
import { useQuery, gql } from '@apollo/client';
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

const Planning = (): JSX.Element => {
  const { loading, error, data } = useQuery(ALL_TASKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <Agenda events={data.allTasks} />
      <FormNewTask />
    </div>
  );
};

export default Planning;
