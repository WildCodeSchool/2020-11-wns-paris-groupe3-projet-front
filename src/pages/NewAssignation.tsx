import React, { useState, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import Header from '../components/Header';
import TaskAssignationForm from '../components/TaskAssignationForm';

import { NewAssignmentType, HandleChangeAssignation, HandleChangeDate, HandleSubmit } from '../types';
import { ALL_TASKS, CREATE_TASK_ASSIGNATION, TASK_ASSIGNATIONS, CLASSROOMS } from '../queries';
import { AuthContext } from '../context/auth-context';

const NewAssignation = (): JSX.Element => {
  const { state } = useContext(AuthContext);
  const { loading: tasksQueryLoading, error: tasksQueryError, data: tasksQueryData } = useQuery(ALL_TASKS);
  const { loading: classroomsQueryLoading, error: classroomsQueryError, data: classroomsQueryData } = useQuery(
    CLASSROOMS,
  );
  const [createAssignation] = useMutation(CREATE_TASK_ASSIGNATION, {
    refetchQueries: [{ query: TASK_ASSIGNATIONS }],
  });
  // eslint-disable-next-line
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [assignation, setAssignation] = useState<NewAssignmentType>({
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

  if (tasksQueryLoading || classroomsQueryLoading) return <p>Loading...</p>;
  if (tasksQueryError || classroomsQueryError) return <p>Error...</p>;

  const { classrooms } = classroomsQueryData;
  const { tasks } = tasksQueryData;

  return (
    <div>
      <Header label="Assigner un devoir à une classe" firstname={state.user.firstname} lastname={state.user.lastname} />
      <TaskAssignationForm
        tasks={tasks}
        assignation={assignation}
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
