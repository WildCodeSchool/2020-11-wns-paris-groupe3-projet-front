/* eslint-disable react/display-name */
import React from 'react';
import { useQuery } from '@apollo/client';
import { GridColDef } from '@material-ui/data-grid';

import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import DataList from '../components/DataList';
import IconButton from '../components/IconButton';
import LinkButton from '../components/LinkButton';

import { USERS } from '../queries';

import { Container } from '../styles/dashboard';

const DashboardAdmin = (): JSX.Element => {
  const { loading, error, data } = useQuery(USERS);

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'firstname', headerName: 'Prénom', width: 200 },
    { field: 'lastname', headerName: 'Nom', width: 200 },
    { field: 'role', headerName: 'Rôle', width: 200 },
    { field: 'creation_date', headerName: 'Créé.e le', type: 'date', width: 200 },
    { field: 'status', headerName: 'Statut', width: 200 },
    {
      field: 'edit',
      headerName: 'Editer',
      width: 200,
      renderCell: () => <IconButton type="edit" />,
    },
    {
      field: 'delete',
      headerName: 'Supprimer',
      width: 200,
      renderCell: () => <IconButton type="delete" />,
    },
  ];

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <Header label="Mon tableau de bord" />
      <Container>
        <SubHeader title="Tous.tes les utilisateurs.trices" />
        {data.users.length > 0 && (
          <LinkButton to="/" label="Ajouter un.e nouvel.le utilisateur.rice" color="secondary" />
        )}
      </Container>
      <DataList data={data.users} columns={columns} />
    </div>
  );
};

export default DashboardAdmin;
