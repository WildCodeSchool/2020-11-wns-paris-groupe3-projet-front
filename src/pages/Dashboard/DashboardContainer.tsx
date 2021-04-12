import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';

import Header from 'components/Header';
import DashboardViewTeacher from './DashboardViewTeacher';
// import DashboardViewStudent from './DashboardViewStudent';
// import DashboardViewAdmin from './DashboardViewAdmin';

import { TASK_ASSIGNATIONS } from 'queries';
import { AuthContext } from 'context/auth-context';

export const DashboardContainer = (): JSX.Element => {
  const { state } = useContext(AuthContext);
  const { loading: assignationQueryLoading, error: assignationQueryError, data: assignationQueryData } = useQuery(
    TASK_ASSIGNATIONS,
  );

  if (assignationQueryLoading) return <p>Loading...</p>;
  if (assignationQueryError) return <p>Error...</p>;

  const { tasksAssignations } = assignationQueryData;

  return (
    <div>
      <Header label="Tableau de bord" firstname={state.user.firstname} lastname={state.user.lastname} />
      <DashboardViewTeacher assignments={tasksAssignations} />
      {/* Nav bar */}
    </div>
  );
};
