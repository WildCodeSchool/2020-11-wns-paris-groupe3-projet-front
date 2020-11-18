import React from 'react';
import Agenda from './Agenda';
import FormNewTask from './FormNewTask';

const Planning = (): JSX.Element => {
  return (
    <div>
      <Agenda />
      <FormNewTask />
    </div>
  );
};

export default Planning;
