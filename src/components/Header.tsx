import React from 'react';

import { FirstHeader, Container } from '../styles/header';

export interface HeaderProps {
  label: string;
  firstname: string;
  lastname: string;
}

const Header = ({ label, firstname, lastname }: HeaderProps): JSX.Element => {
  return (
    <Container>
      <FirstHeader>{label}</FirstHeader>
      <div>
        <div>
          <p>{firstname + ' ' + lastname}</p>
          <p>Vous avez 5 nouvelles notifications</p>
        </div>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
      </div>
    </Container>
  );
};

export default Header;
