import React from 'react';
import { useQuery } from '@apollo/client';
import { Button, ButtonGroup } from '@material-ui/core/';

import CalendarContainer from './components/Calendar';

import { ASSIGNMENTS } from 'queries';

import { Container, ButtonLink } from 'styles/dashboard';

const DashboardTeacher = (): JSX.Element => {
  const { loading, error, data } = useQuery(ASSIGNMENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
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
        <CalendarContainer assignments={data.tasksAssignations} />
      </div>
    </Container>
  );
};

export default DashboardTeacher;
