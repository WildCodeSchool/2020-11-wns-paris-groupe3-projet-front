import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core/';

import CalendarContainer from './components/Calendar';

import { TaskAssignation } from '../../types';

import { Container, ButtonLink } from '../../styles/dashboard';

interface DashboardViewTeacherProps {
  assignations: TaskAssignation[];
}

const DashboardViewTeacher = ({ assignations }: DashboardViewTeacherProps): JSX.Element => {
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
        <CalendarContainer assignations={assignations} />
      </div>
    </Container>
  );
};

export default DashboardViewTeacher;
