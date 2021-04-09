/* eslint-disable react/display-name */
import React from 'react';
import { useQuery } from '@apollo/client';
import Button from '@material-ui/core/Button';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { GridColDef, GridCellParams } from '@material-ui/data-grid';

import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import DataList from '../components/DataList';

import { USERS } from '../queries';

import { ButtonLink } from '../styles/dashboard';

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
      renderCell: (params: GridCellParams) => (
        <strong>
          <Button size="small">
            <EditOutlinedIcon />
          </Button>
        </strong>
      ),
    },
    {
      field: 'delete',
      headerName: 'Supprimer',
      width: 200,
      renderCell: (params: GridCellParams) => (
        <strong>
          <Button size="small">
            <DeleteOutlineOutlinedIcon />
          </Button>
        </strong>
      ),
    },
  ];

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <Header label="Mon tableau de bord" />
      <SubHeader title="Tous.tes les utilisateurs.trices" />
      <Button variant="contained" color="secondary">
        <ButtonLink to="">Ajouter un.e nouvel.le utilisateur.rice</ButtonLink>
      </Button>
      <DataList data={data.users} columns={columns} />
    </div>
  );
};

export default DashboardAdmin;
