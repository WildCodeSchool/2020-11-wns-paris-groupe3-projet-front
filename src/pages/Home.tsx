import React, { useState } from 'react';

import { OnClick } from 'types';

import Login from 'components/Login';
import Register from 'components/Register';
import logo from 'assets/logoEH.svg';

import {
  ButtonChangeForm,
  ContainerHome,
  ContainerHomeForm,
  ContainerHomeLogo,
  LogoHome,
  TitleHome,
} from 'styles/auth-form';

const Home = (): JSX.Element => {
  const [alreadyRegister, setAlreadyRegister] = useState(true);

  const displayForm: OnClick = (e) => {
    e.preventDefault();
    setAlreadyRegister(!alreadyRegister);
  };

  return (
    <ContainerHome>
      <ContainerHomeForm>
        <TitleHome>{alreadyRegister ? 'Connectez-vous !' : 'Inscrivez-vous !'}</TitleHome>
        <ButtonChangeForm type="button" onClick={displayForm}>
          {alreadyRegister ? 'Pas encore inscrit ?' : 'Déjà inscrit ?'}
        </ButtonChangeForm>
        <div>{alreadyRegister ? <Login /> : <Register />}</div>
      </ContainerHomeForm>
      <ContainerHomeLogo>
        <LogoHome src={logo} alt="Logo" />
      </ContainerHomeLogo>
    </ContainerHome>
  );
};

export default Home;
