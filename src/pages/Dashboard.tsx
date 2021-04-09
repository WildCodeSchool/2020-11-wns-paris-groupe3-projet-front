import React from 'react';
import { useQuery } from '@apollo/client';

import Calendar from '../components/Calendar';
import Header from '../components/Header';
import LinkButton from '../components/LinkButton';

import { TASK_ASSIGNATIONS } from '../queries';

import { Container, Buttoncontainer } from '../styles/dashboard';

const Dashboard = (): JSX.Element => {
  const { loading: assignationQueryLoading, error: assignationQueryError, data: assignationQueryData } = useQuery(
    TASK_ASSIGNATIONS,
  );

  if (assignationQueryLoading) return <p>Loading...</p>;
  if (assignationQueryError) return <p>Error...</p>;

  const { tasksAssignations } = assignationQueryData;

  return (
    <div>
      <Header label="Tableau de bord" />
      <Container>
        <div>
          <Buttoncontainer variant="contained" color="primary">
            <LinkButton to="/task" label="Créer un nouveau devoir" color="primary" />
            <LinkButton to="/assignation" label="Assigner un devoir à une classe" color="primary" />
          </Buttoncontainer>
        </div>
        <div>
          <Calendar assignations={tasksAssignations} />
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
