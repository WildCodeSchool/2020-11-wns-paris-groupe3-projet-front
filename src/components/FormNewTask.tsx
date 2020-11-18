import React from 'react';

import { TaskProps, HandleChange, HandleSubmit } from './Planning';

interface FormProps {
  task: TaskProps;
  handleChange: HandleChange;
  handleSubmit: HandleSubmit;
}

const FormNewTask = ({ task, handleChange, handleSubmit }: FormProps): JSX.Element => {
  return (
    <div>
      <h4>Ajouter un devoir</h4>
      <form onSubmit={handleSubmit}>
        {/* <label>Classe
          <input type='text' />
        </label> */}
        <label>
          Nom du devoir
          <input type="text" name="title" value={task.title} onChange={handleChange} />
        </label>
        <label>
          Date de début
          <input type="date" name="start" value={task.start.toString()} onChange={handleChange} />
        </label>
        <label>
          Date de fin
          <input type="date" name="end" value={task.end.toString()} onChange={handleChange} />
        </label>
        <button type="submit">Valider</button>
        <button>Annuler</button>
      </form>
    </div>
  );
};

export default FormNewTask;
