import React from 'react';
import { Task, HandleChange, HandleSubmit } from '../types';

interface FormProps {
  task: Task;
  handleChange: HandleChange;
  handleSubmit: HandleSubmit;
}

const FormNewTask = ({ task, handleSubmit, handleChange }: FormProps): JSX.Element => {
  return (
    <div>
      <h4>Ajouter un devoir</h4>
      <form onSubmit={handleSubmit} aria-label="form">
        <label>
          Nom du devoir
          <input type="text" name="title" value={task.taskname} onChange={handleChange} />
        </label>
        <label>
          Fichier
          <input type="date" name="start" value={task.url} onChange={handleChange} />
        </label>
        <button type="submit">Valider</button>
        <button>Annuler</button>
      </form>
    </div>
  );
};

export default FormNewTask;
