import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import Header from '../components/Header';
import TaskAssignationForm from '../components/TaskAssignationForm';

import { NewAssignationType, HandleChangeAssignation, HandleChangeDate, HandleSubmit } from '../types';
import { ALL_TASKS, CREATE_TASK_ASSIGNATION, TASK_ASSIGNATIONS, CLASSROOMS } from '../queries';

const NewAssignation = (): JSX.Element => {
  const { loading: tasksQueryLoading, error: tasksQueryError, data: tasksQueryData } = useQuery(ALL_TASKS);
  const { loading: assignationQueryLoading, error: assignationQueryError, data: assignationQueryData } = useQuery(
    TASK_ASSIGNATIONS,
  );
  const { loading: classroomsQueryLoading, error: classroomsQueryError, data: classroomsQueryData } = useQuery(
    CLASSROOMS,
  );
  const [createAssignation] = useMutation(CREATE_TASK_ASSIGNATION, {
    refetchQueries: [{ query: TASK_ASSIGNATIONS }],
  });
  // eslint-disable-next-line
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [assignation, setAssignation] = useState<NewAssignationType>({
    task: '',
    end_date: new Date().toString(),
    affectedTo: '',
  });

  const handleChangeTask: HandleChangeAssignation = (e, value) => {
    e.preventDefault();
    if (value) {
      setAssignation({ ...assignation, task: value._id });
    }
  };

  const handleChangeClassroom: HandleChangeAssignation = (e, value) => {
    e.preventDefault();
    if (value) {
      setAssignation({ ...assignation, affectedTo: value._id });
    }
  };

  const handleChangeDate: HandleChangeDate = (date) => {
    if (date) {
      setAssignation({ ...assignation, end_date: date.toString() });
    }
  };

  const handleSubmit: HandleSubmit = async (e) => {
    e.preventDefault();
    createAssignation({ variables: { input: assignation } });
  };

  if (tasksQueryLoading || assignationQueryLoading || classroomsQueryLoading) return <p>Loading...</p>;
  if (tasksQueryError || assignationQueryError || classroomsQueryError) return <p>Error...</p>;

  const { tasksAssignations } = assignationQueryData;
  const { classrooms } = classroomsQueryData;
  const { tasks } = tasksQueryData;

  return (
    <div>
      <Header label="Assigner un devoir à uune classe" />
      <TaskAssignationForm
        tasks={tasks}
        assignation={assignation}
        assignations={tasksAssignations}
        classrooms={classrooms}
        selectedDate={selectedDate}
        handleChangeTask={handleChangeTask}
        handleChangeClassroom={handleChangeClassroom}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default NewAssignation;
