import React from 'react';
import { useQuery } from '@apollo/client';

import Header from '../../components/Header';
import DashboardViewTeacher from './DashboardViewTeacher';
// import DashboardViewStudent from './DashboardViewStudent';
// import DashboardViewAdmin from './DashboardViewAdmin';

import { TASK_ASSIGNATIONS } from '../../queries';

export const DashboardContainer = (): JSX.Element => {
  const { loading: assignationQueryLoading, error: assignationQueryError, data: assignationQueryData } = useQuery(
    TASK_ASSIGNATIONS,
  );

  if (assignationQueryLoading) return <p>Loading...</p>;
  if (assignationQueryError) return <p>Error...</p>;

  const { tasksAssignations } = assignationQueryData;

  return (
    <div>
      <Header label="Tableau de bord" />
      <DashboardViewTeacher assignments={tasksAssignations} />
      {/* Nav bar */}
    </div>
  );
};
