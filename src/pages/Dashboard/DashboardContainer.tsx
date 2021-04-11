import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';

import Header from 'components/Header';
import DashboardViewTeacher from './DashboardViewTeacher';
import DashboardViewStudent from './DashboardViewStudent';
import DashboardViewAdmin from './DashboardViewAdmin';

import { ASSIGNMENTS, USERS } from 'queries';
import { AuthContext } from '../../context/auth-context';

export const DashboardContainer = (): JSX.Element => {
  const { state } = useContext(AuthContext);
  const { loading: assignmentQueryLoading, error: assignmentQueryError, data: assignmentQueryData } = useQuery(
    ASSIGNMENTS,
  );
  const { loading: usersQueryLoading, error: usersQueryError, data: usersQueryData } = useQuery(USERS);

  if (assignmentQueryLoading || usersQueryLoading) return <p>Loading...</p>;
  if (assignmentQueryError || usersQueryError) return <p>Error...</p>;

  const { assignments } = assignmentQueryData;

  return (
    <div>
      <Header label="Tableau de bord" />
      {state.user.role.role_name === 'Teacher' && <DashboardViewTeacher assignments={assignments} />}
      {state.user.role.role_name === 'Admin' && <DashboardViewAdmin usersData={usersQueryData.users} />}
      {state.user.role.role_name === 'Student' && <DashboardViewStudent />}
    </div>
  );
};
