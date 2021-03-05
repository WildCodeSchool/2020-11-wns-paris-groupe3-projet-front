import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core/';

import Calendar from '../components/Calendar';
import Header from '../components/Header';
import { TASK_ASSIGNATIONS } from '../queries';

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
      <div>
        <ButtonGroup variant="contained" color="primary">
          <Button>
            <Link to="/task">Créer un nouveau devoir</Link>
          </Button>
          <Button>
            <Link to="/assignation">Assigner un devoir à une classe</Link>
          </Button>
        </ButtonGroup>
      </div>
      <Calendar assignations={tasksAssignations} />
    </div>
  );
};

export default Dashboard;
