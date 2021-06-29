import React from 'react';

import Header from 'components/Header';

import { Container } from 'styles/dashboard';

const DashboardStudent = (): JSX.Element => {
  return (
    <div>
      <Header label="Tableau de bord" />
      <Container>
        <p>DashboardStudent</p>
      </Container>
    </div>
  );
};

export default DashboardStudent;
