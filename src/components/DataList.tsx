/* eslint-disable react/display-name */
import React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

import NoData from './NoData';

import { FormattedType } from 'types';

import { Container } from 'styles/data-list';

interface DataListProps {
  columns: GridColDef[];
  formattedData: FormattedType[];
}

const DataList = ({ columns, formattedData }: DataListProps): JSX.Element => {
  return (
    <Container>
      {formattedData.length > 0 ? (
        <DataGrid rows={formattedData} columns={columns} pageSize={5} />
      ) : (
        <NoData title="Pour commencer à ajouter des utilisateurs" />
      )}
    </Container>
  );
};

export default DataList;
