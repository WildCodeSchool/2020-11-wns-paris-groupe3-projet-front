/* eslint-disable react/display-name */
import React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

import FirstAddDataButton from './FirstAddDataButton';

import { FormattedType } from 'types';

import { DataContainer } from 'styles/data-list';

interface DataListProps {
  columns: GridColDef[];
  formattedData: FormattedType[];
}

const DataList = ({ columns, formattedData }: DataListProps): JSX.Element => {
  return (
    <DataContainer>
      {formattedData.length > 0 ? (
        <DataGrid rows={formattedData} columns={columns} pageSize={5} />
      ) : (
        <FirstAddDataButton title="Pour commencer à ajouter des utilisateurs" />
      )}
    </DataContainer>
  );
};

export default DataList;
