import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core/';

import CalendarContainer from './components/Calendar';

import { AssignmentType } from 'types';

import { Container, ButtonLink } from 'styles/dashboard';

interface DashboardViewTeacherProps {
  assignments: AssignmentType[];
}

const DashboardViewTeacher = ({ assignments }: DashboardViewTeacherProps): JSX.Element => {
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
        <CalendarContainer assignments={assignments} />
      </div>
    </Container>
  );
};

export default DashboardViewTeacher;
