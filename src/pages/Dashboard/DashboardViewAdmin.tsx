/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { GridColDef } from '@material-ui/data-grid';

import DataList from 'components/DataList';
import IconButton from 'components/IconButton';
import LinkButton from 'components/LinkButton';
import SubHeader from 'components/SubHeader';

import { UserType, FormattedType } from 'types';

import { Container } from 'styles/dashboard';

interface DashboardViewAdminPros {
  usersData: UserType[];
}

const DashboardViewAdmin = ({ usersData }: DashboardViewAdminPros): JSX.Element => {
  const [formattedData, setFormattedData] = useState<FormattedType[]>([]);

  const columnsUsers: GridColDef[] = [
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

  useEffect(() => {
    const dataTemp: FormattedType[] = [];
    usersData &&
      usersData.map((d: UserType) => {
        return dataTemp.push({
          ...d,
          id: d._id,
          role: d.role.role_name,
          creation_date: format(new Date(d.creation_date), 'dd-MM-yyyy'),
        });
      });
    setFormattedData(dataTemp);
  }, [usersData]);

  return (
    <div>
      <Container>
        <SubHeader title="Tous.tes les utilisateurs.trices" />
        {usersData.length > 0 && (
          <LinkButton to="/" label="Ajouter un.e nouvel.le utilisateur.rice" color="secondary" />
        )}
      </Container>
      <DataList columns={columnsUsers} formattedData={formattedData} />
    </div>
  );
};

export default DashboardViewAdmin;
