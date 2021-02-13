import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

import { Task, Classroom, TaskAssignation, HandleChange, HandleSubmit } from '../types';
import { ALL_TASKS, ALL_CLASSROOMS, CREATE_ASSIGNATION } from '../queries';

const AssignTask = (): JSX.Element => {
  const { loading: loadingTasks, error: errorTasks, data: dataTasks } = useQuery(ALL_TASKS);
  const { loading: loadingClassrooms, error: errorClassrooms, data: dataClassrooms } = useQuery(ALL_CLASSROOMS);
  const [createAssignation] = useMutation(CREATE_ASSIGNATION);
  const [assignation, setAssignation] = useState<TaskAssignation>({
    task: '',
    classroom: '',
  });

  const handleChangeTask = (e: any, value: any) => {
    e.preventDefault();
    setAssignation({ ...assignation, task: value._id });
    console.log(assignation);
  };

  const handleChangeClassroom = (e: any, value: any) => {
    e.preventDefault();
    setAssignation({ ...assignation, classroom: value._id });
    console.log(assignation);
  };

  const handleSubmit: HandleSubmit = (e) => {
    e.preventDefault();
    try {
      createAssignation({ variables: { input: assignation } });
    } catch (err) {
      console.log(err);
    }
    console.log(assignation);
  };

  if (loadingTasks || loadingClassrooms) return <p>Loading...</p>;
  if (errorTasks || errorClassrooms) return <p>Error</p>;

  return (
    <div>
      <h3>Assigner un devoir</h3>
      <form onSubmit={handleSubmit} aria-label="form">
        <Autocomplete
          autoHighlight
          multiple={false}
          options={dataTasks.tasks}
          getOptionLabel={(task) => task.taskname}
          style={{ width: 300 }}
          onChange={handleChangeTask}
          renderInput={(params) => <TextField {...params} label="Choisir le devoir" variant="outlined" />}
        />
        <Autocomplete
          autoHighlight
          options={dataClassrooms.classrooms}
          getOptionLabel={(classroom) => classroom.classname}
          style={{ width: 300 }}
          onChange={handleChangeClassroom}
          renderInput={(params) => <TextField {...params} label="Choisir la classe" variant="outlined" />}
        />
        <Button type="submit">Assigner</Button>
      </form>
    </div>
  );
};

export default AssignTask;
