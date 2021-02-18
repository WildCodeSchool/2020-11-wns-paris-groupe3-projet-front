import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import Calendar from './Calendar';
import FormNewTask from './FormNewTask';

import { TaskAssignation, HandleChange, HandleSubmit } from '../types';
import { ALL_TASKS, CREATE_TASK_ASSIGNATION, TASK_ASSIGNATIONS, CLASSROOMS } from '../queries';

const Planning = (): JSX.Element => {
  const { loading: tasksQueryLoading, error: tasksQueryError, data: tasksQueryData } = useQuery(ALL_TASKS);
  const {
    loading: assignationQueryLoading,
    error: assignationQueryError,
    data: assignationQueryData,
    refetch,
  } = useQuery(TASK_ASSIGNATIONS);
  const { loading: classroomsQueryLoading, error: classroomsQueryError, data: classroomsQueryData } = useQuery(
    CLASSROOMS,
  );
  const [createAssignation] = useMutation(CREATE_TASK_ASSIGNATION);

  const [assignation, setAssignation] = useState<TaskAssignation>({
    _id: '',
    task: { taskname: '', url: '' },
    end_date: new Date(),
    affectedTo: { classname: '' },
  });

  const handleChange: HandleChange = (e) => {
    const taskTemp = { ...assignation, [e.target.name]: e.target.value };
    setAssignation(taskTemp);
  };

  const handleSubmit: HandleSubmit = (e) => {
    e.preventDefault();
    createAssignation({ variables: { input: assignation } });
    refetch();
  };

  if (tasksQueryLoading || assignationQueryLoading || classroomsQueryLoading) return <p>Loading...</p>;
  if (tasksQueryError || assignationQueryError || classroomsQueryError) return <p>Error</p>;
  return (
    <div>
      <Calendar assignations={assignationQueryData.tasksAssignations} />
      <FormNewTask
        tasks={tasksQueryData.tasks}
        assignations={assignationQueryData.tasksAssignations}
        classrooms={classroomsQueryData.classrooms}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Planning;
