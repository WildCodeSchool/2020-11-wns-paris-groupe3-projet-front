/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

import NoData from './NoData';

import { UserType } from '../types';

import { Container } from '../styles/data-list';

interface DataListProps {
  data: UserType[];
  columns: GridColDef[];
}

const DataList = ({ data, columns }: DataListProps): JSX.Element => {
  const [formatedData, setFormatedData] = useState<UserType[]>([]);

  useEffect(() => {
    const dataTemp: UserType[] = [];
    data.length > 0 &&
      data.map((d: any) => {
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
    <Container>
      {data.length > 0 ? (
        <DataGrid rows={formatedData} columns={columns} pageSize={5} />
      ) : (
        <NoData title="Pour commencer à ajouter des utilisateurs" />
      )}
    </Container>
  );
};

export default DataList;
