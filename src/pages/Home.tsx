import React, { useState } from 'react';

import { OnClick, HistoryType } from '../types';

import Login from '../components/Login';
import Register from '../components/Register';

import { ButtonChangeForm } from '../styles/auth-form';

const Home = ({ history }: HistoryType): JSX.Element => {
  const [alreadyRegister, setAlreadyRegister] = useState(true);

  const displayForm: OnClick = (e) => {
    e.preventDefault();
    setAlreadyRegister(!alreadyRegister);
  };

  return (
    <div>
      {alreadyRegister ? <Login history={history} /> : <Register history={history} />}
      <ButtonChangeForm type="button" onClick={displayForm}>
        {alreadyRegister ? 'Pas encore inscrit ?' : 'Déjà inscrit ?'}
      </ButtonChangeForm>
    </div>
  );
};

export default Home;
