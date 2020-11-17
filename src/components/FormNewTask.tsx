import moment from 'moment';
import React, { useState } from 'react';

interface FormProps {
  end: Date,
  start: Date,
  title: string,
  setEnd: Function,
  setStart: Function,
  setTitle: Function,
  handleSubmit: any
};

const FormNewTask = (props: FormProps): JSX.Element => {
  
  return (
    <div>
      <h4>Ajouter un devoir</h4>
      <form onSubmit={props.handleSubmit}>
        {/* <label>Classe
          <input type='text' />
        </label> */}
        <label>Nom du devoir
          <input type='text' value={props.title} onChange={e => props.setTitle(e.target.value)}/>
        </label>
        <label>Date de début
          <input type='date' value={moment(props.start).toString()} onChange={e => props.setStart(moment(e.target.value).toDate())}/>
        </label>
        <label>Date de fin
          <input type='date' value={moment(props.end).toString()} onChange={e => props.setEnd(moment(e.target.value).toDate())}/>
        </label>
        <button type="submit">Valider</button>
        <button>Annuler</button>
      </form>
    </div>
  );
};

export default FormNewTask;
