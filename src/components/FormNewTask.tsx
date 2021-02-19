import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';

import { Task, Classroom, TaskAssignation, HandleChangeAssignation, HandleChange, HandleSubmit } from '../types';

import { Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
interface FormAssignationProps {
  tasks: Task[];
  assignations: TaskAssignation[];
  classrooms: Classroom[];
  selectedDate: Date;
  handleChangeTask: HandleChangeAssignation;
  handleChangeClassroom: HandleChangeAssignation;
  handleChangeDate: HandleChange;
  handleSubmit: HandleSubmit;
}

const FormNewTask = ({
  tasks,
  assignations,
  classrooms,
  selectedDate,
  handleSubmit,
  handleChangeTask,
  handleChangeClassroom,
  handleChangeDate,
}: FormAssignationProps): JSX.Element => {
  return (
    <div>
      <h4>Assigner un devoir</h4>
      <form onSubmit={handleSubmit} aria-label="form">
        <Autocomplete
          options={tasks}
          getOptionLabel={(option) => option.taskname}
          style={{ width: 300 }}
          onChange={handleChangeTask}
          renderInput={(params) => <TextField {...params} label="Choix du devoir" variant="outlined" value={params} />}
        />
        <Autocomplete
          options={classrooms}
          getOptionLabel={(option) => option.classname}
          style={{ width: 300 }}
          onChange={handleChangeClassroom}
          renderInput={(params) => <TextField {...params} label="Choix de la classe" variant="outlined" />}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disablePast
            disableToolbar
            invalidDateMessage="Please"
            inputVariant="outlined"
            variant="inline"
            format="dd/MM/yyyy"
            InputAdornmentProps={{ position: 'start' }}
            value={selectedDate}
            onChange={(date: any) => handleChangeDate(date)}
          />
        </MuiPickersUtilsProvider>
        <Button type="submit">Valider</Button>
        <Button>Annuler</Button>
      </form>
      <div>
        <h4>Liste des devoirs assignés :</h4>
        <ul>
          {assignations.map((assign) => (
            <li key={assign._id}>
              {assign.task.taskname} a été assigné à la classe {assign.affectedTo.classname} et doit être rendu le{' '}
              {assign.end_date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormNewTask;
