import React from 'react';
import { Task, TaskAssignation, Classroom, HandleChange, HandleSubmit } from '../types';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

interface FormProps {
  tasks: Task[];
  assignations: TaskAssignation[];
  classrooms: Classroom[];
  handleChange: HandleChange;
  handleSubmit: HandleSubmit;
}

const FormNewTask = ({ tasks, assignations, classrooms, handleSubmit, handleChange }: FormProps): JSX.Element => {
  return (
    <div>
      <h4>Assigner un devoir</h4>
      <form onSubmit={handleSubmit} aria-label="form">
        <Autocomplete
          options={tasks}
          getOptionLabel={(option) => option.taskname}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Choix du devoir" variant="outlined" />}
        />
        <Autocomplete
          options={classrooms}
          getOptionLabel={(option) => option.classname}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Choix de la classe" variant="outlined" />}
        />
        <button type="submit">Valider</button>
        <button>Annuler</button>
      </form>
      <div>
        <h4>Liste des devoirs assignés :</h4>
        <ul>
          {assignations.map((assign) => (
            <li key={assign._id}>
              {assign.task.taskname} pour la classe {assign.affectedTo.classname}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormNewTask;
