import React from 'react';
import { useQuery } from '@apollo/client';
import { Button, ButtonGroup } from '@material-ui/core/';

import Calendar from '../components/Calendar';
import Header from '../components/Header';

import { TASK_ASSIGNATIONS } from '../queries';

import { Container, ButtonLink } from '../styles/dashboard';

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
          <ButtonGroup variant="contained" color="primary">
            <Button>
              <ButtonLink to="/task">Créer un nouveau devoir</ButtonLink>
            </Button>
            <Button>
              <ButtonLink to="/assignation">Assigner un devoir à une classe</ButtonLink>
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <Calendar assignations={tasksAssignations} />
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
