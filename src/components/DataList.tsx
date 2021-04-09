/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

import NoData from './NoData';

import { UserType, FormattedType } from '../types';

import { Container } from '../styles/data-list';

interface DataListProps {
  data: UserType[];
  columns: GridColDef[];
}

const DataList = ({ data, columns }: DataListProps): JSX.Element => {
  const [formattedData, setFormattedData] = useState<FormattedType[]>([]);

  useEffect(() => {
    const dataTemp: FormattedType[] = [];
    data.length > 0 &&
      data.map((d) => {
        return dataTemp.push({
          ...d,
          id: d._id,
          role: d.role.role_name,
          creation_date: format(new Date(d.creation_date), 'dd-MM-yyyy'),
        });
      });
    setFormattedData(dataTemp);
  }, []);

  return (
    <Container>
      {data.length > 0 ? (
        <DataGrid rows={formattedData} columns={columns} pageSize={5} />
      ) : (
        <NoData title="Pour commencer à ajouter des utilisateurs" />
      )}
    </Container>
  );
};

export default DataList;
