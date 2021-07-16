/* eslint-disable react/display-name */
import React from 'react';
import { GridColDef } from '@material-ui/data-grid';
import IconButton from 'components/IconButton';

export const columnsUsers: GridColDef[] = [
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
    renderCell: (): JSX.Element => <IconButton type="edit" />,
  },
  {
    field: 'delete',
    headerName: 'Supprimer',
    width: 200,
    renderCell: (): JSX.Element => <IconButton type="delete" />,
  },
];
