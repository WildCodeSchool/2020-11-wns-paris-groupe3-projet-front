import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';

import { UserType } from '../types';

import { TableTop, Cell, Edit, Delete } from '../styles/admin-list';

interface AdminListProps {
  data: UserType[];
}

const AdminList = ({ data }: AdminListProps): JSX.Element => {
  if (data.length > 0) return <p>nada</p>;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableTop>
          <TableRow>
            <TableCell align="left">
              <Checkbox />
            </TableCell>
            {Object.keys(data[0]).map((k) => (
              <Cell key={k} align="center">
                {k}
              </Cell>
            ))}
            <Cell align="center">Editer</Cell>
            <Cell align="center">Supprimer</Cell>
          </TableRow>
        </TableTop>
        <TableBody>
          {data.map((d) => (
            <TableRow key={d.id}>
              <TableCell align="left">
                <Checkbox />
              </TableCell>
              {Object.values(d).map((df) => (
                <TableCell key={df} align="center">
                  {df}
                </TableCell>
              ))}
              <TableCell align="center">
                <IconButton aria-label="edit">
                  <Edit />
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <IconButton aria-label="delete">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminList;
