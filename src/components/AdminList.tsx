/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Button } from '@material-ui/core';
import { DataGrid, GridColDef, GridCellParams } from '@material-ui/data-grid';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import { UserType } from '../types';

interface AdminListProps {
  data: UserType[];
}

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

const AdminList = ({ data }: AdminListProps): JSX.Element => {
  const [formatedData, setFormatedData] = useState<UserType[]>([]);

  useEffect(() => {
    const dataTemp: UserType[] = [];
    data.length > 0 &&
      data.map((d: any) => {
        console.log(d);
        return dataTemp.push({
          ...d,
          id: d._id,
          role: d.role.role_name,
          creation_date: format(new Date(d.creation_date), 'dd-MM-yyyy'),
        });
      });
    setFormatedData(dataTemp);
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={formatedData} columns={columns} pageSize={5} />
    </div>
  );
};

export default AdminList;
