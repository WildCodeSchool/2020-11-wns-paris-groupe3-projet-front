import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import 'moment/locale/fr';

import { Task, Classroom, TaskAssignation, HandleChangeAssignation, HandleChange, HandleSubmit } from '../types';

import { Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

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

const TaskAssignationForm = ({
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
          renderInput={(params) => <TextField {...params} label="Choix du devoir" variant="outlined" required />}
        />
        <Autocomplete
          options={classrooms}
          getOptionLabel={(option) => option.classname}
          style={{ width: 300 }}
          onChange={handleChangeClassroom}
          renderInput={(params) => <TextField {...params} label="Choix de la classe" variant="outlined" required />}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            autoOk
            disablePast
            disableToolbar
            invalidDateMessage="Please"
            inputVariant="outlined"
            variant="inline"
            format="dd/MM/yyyy"
            InputAdornmentProps={{ position: 'start' }}
            value={selectedDate}
            onChange={(date) => handleChangeDate(date)}
          />
        </MuiPickersUtilsProvider>
        <Button type="submit">Valider</Button>
        <Button>Annuler</Button>
      </form>
      <>
        <h4>Liste des devoirs assignés :</h4>
        <List component="nav" aria-label="secondary mailbox folders">
          {assignations.map((assign) => (
            <ListItem key={assign._id} button>
              {assign.task.taskname} a été assigné à la classe {assign.affectedTo.classname} et doit être rendu le{' '}
              {moment(assign.end_date).locale('fr').format('dddd Do MMMM YYYY')}
            </ListItem>
          ))}
        </List>
      </>
    </div>
  );
};

export default TaskAssignationForm;
