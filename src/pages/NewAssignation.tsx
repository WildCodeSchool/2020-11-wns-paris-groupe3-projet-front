import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import Header from 'components/Header';
import TaskAssignationForm from 'components/TaskAssignationForm';

import { NewAssignmentType, HandleChangeAssignation, HandleChangeDate, HandleSubmit } from 'types';
import { ALL_TASKS, CREATE_TASK_ASSIGNATION, ASSIGNMENTS, CLASSROOMS } from 'queries';

const NewAssignation = (): JSX.Element => {
  const { loading: tasksQueryLoading, error: tasksQueryError, data: tasksQueryData } = useQuery(ALL_TASKS);
  const { loading: classroomsQueryLoading, error: classroomsQueryError, data: classroomsQueryData } = useQuery(
    CLASSROOMS,
  );
  const [createAssignation] = useMutation(CREATE_TASK_ASSIGNATION, {
    refetchQueries: [{ query: ASSIGNMENTS }],
  });
  // eslint-disable-next-line
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [assignment, setAssignment] = useState<NewAssignmentType>({
    task: '',
    end_date: new Date().toString(),
    affectedTo: '',
  });

  const handleChangeTask: HandleChangeAssignation = (e, value) => {
    e.preventDefault();
    if (value) {
      setAssignment({ ...assignment, task: value._id });
    }
  };

  const handleChangeClassroom: HandleChangeAssignation = (e, value) => {
    e.preventDefault();
    if (value) {
      setAssignment({ ...assignment, affectedTo: value._id });
    }
  };

  const handleChangeDate: HandleChangeDate = (date) => {
    if (date) {
      setAssignment({ ...assignment, end_date: date.toString() });
    }
  };

  const handleSubmit: HandleSubmit = async (e) => {
    e.preventDefault();
    createAssignation({ variables: { input: assignment } });
  };

  if (tasksQueryLoading || classroomsQueryLoading) return <p>Loading...</p>;
  if (tasksQueryError || classroomsQueryError) return <p>Error...</p>;

  const { classrooms } = classroomsQueryData;
  const { tasks } = tasksQueryData;

  return (
    <div>
      <Header label="Assigner un devoir à une classe" />
      <TaskAssignationForm
        tasks={tasks}
        assignment={assignment}
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
