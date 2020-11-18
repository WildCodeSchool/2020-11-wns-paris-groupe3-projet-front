import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import moment from 'moment';

export type TaskProps = {
  start: Date;
  end: Date;
  title: string;
};

const CREATE_TASK = gql`
  mutation CreateTask($input: InputTask!) {
    createTask(input: $input) {
      id
      title
      start
      end
    }
  }
`;

const FormNewTask = (): JSX.Element => {
  const [createTask] = useMutation(CREATE_TASK);
  const [task, setTask] = useState<TaskProps>({
    title: '',
    start: moment().toDate(),
    end: moment().add(1, 'days').toDate(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const taskTemp = { ...task, [e.target.name]: e.target.value };
    setTask(taskTemp);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    createTask({ variables: { input: task } });
  };

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
