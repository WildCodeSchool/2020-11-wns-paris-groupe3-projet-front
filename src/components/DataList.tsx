/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

import { UserType } from '../types';

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

export default DataList;
