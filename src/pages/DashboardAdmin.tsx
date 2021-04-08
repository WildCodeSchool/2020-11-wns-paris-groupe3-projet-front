import React from 'react';
import { useQuery } from '@apollo/client';
import Button from '@material-ui/core/Button';

import Header from '../components/Header';
import AdminList from '../components/AdminList';

import { USERS } from '../queries';

import { ButtonLink } from '../styles/dashboard';

const DashboardAdmin = (): JSX.Element => {
  const { loading, error, data } = useQuery(USERS);
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <Header label={'Mon tableau de bord'} />
      <Button variant="contained" color="secondary">
        <ButtonLink to="">Ajouter un.e nouvel.le utilisateur.rice</ButtonLink>
      </Button>
      <AdminList data={data.users} />
    </div>
  );
};

export default DashboardAdmin;
