import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import 'moment/locale/fr';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import TaskAssignationPreview from './TaskAssignationPreview';

import {
  Task,
  Classroom,
  TaskAssignation,
  NewAssignationType,
  HandleChangeAssignation,
  HandleChangeDate,
  HandleSubmit,
} from '../types';

import { TextInput, Form, KeyboardDatePickerInput, ButtonForm, ButtonFormContainer } from '../styles/form';

interface FormAssignationProps {
  tasks: Task[];
  assignation: NewAssignationType;
  assignations: TaskAssignation[];
  classrooms: Classroom[];
  selectedDate: Date;
  handleChangeTask: HandleChangeAssignation;
  handleChangeClassroom: HandleChangeAssignation;
  handleChangeDate: HandleChangeDate;
  handleSubmit: HandleSubmit;
}

const TaskAssignationForm = ({
  tasks,
  assignation,
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
      <Form onSubmit={handleSubmit} aria-label="form">
        <Autocomplete
          options={tasks}
          getOptionLabel={(option) => option.taskname}
          style={{ width: 300 }}
          onChange={handleChangeTask}
          renderInput={(params) => <TextInput {...params} label="Choix du devoir" variant="outlined" required />}
        />
        <Autocomplete
          options={classrooms}
          getOptionLabel={(option) => option.classname}
          style={{ width: 300 }}
          onChange={handleChangeClassroom}
          renderInput={(params) => <TextInput {...params} label="Choix de la classe" variant="outlined" required />}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePickerInput
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
        <ButtonFormContainer>
          <ButtonForm type="button">Annuler</ButtonForm>
          <ButtonForm type="submit" disabled={assignation.task.length === 0 || assignation.affectedTo.length === 0}>
            Valider
          </ButtonForm>
        </ButtonFormContainer>
      </Form>
      <>
        <h4>Liste des devoirs assignés :</h4>
        {assignations.length > 0 ? (
          <TaskAssignationPreview tasksToDisplay={assignations} daily={false} />
        ) : (
          <p>Pas de devoir.</p>
        )}
      </>
    </div>
  );
};

export default TaskAssignationForm;
