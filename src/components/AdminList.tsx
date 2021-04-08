import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
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
  const [formatedData, setFormatedData] = useState<UserType[]>([]);

  useEffect(() => {
    let dataTemp: UserType[] = [];
    data.length > 0 &&
      data.map((d: any) => {
        return (dataTemp = [
          {
            ...d,
            role: d.role ? d.role.role_name : undefined,
            creation_date: format(new Date(d.creation_date), 'dd-MM-yyyy'),
          },
        ]);
      });
    setFormatedData(dataTemp);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableTop>
          <TableRow>
            <TableCell align="center">
              <Checkbox />
            </TableCell>
            {formatedData.length > 0 &&
              Object.keys(formatedData[0]).map((k) => (
                <Cell key={k} align="center">
                  {k}
                </Cell>
              ))}
            <Cell align="center">Editer</Cell>
            <Cell align="center">Supprimer</Cell>
          </TableRow>
        </TableTop>
        <TableBody>
          {formatedData.map((fdata) => (
            <TableRow key={fdata._id}>
              <TableCell align="center">
                <Checkbox />
              </TableCell>
              {Object.values(fdata).map((d) => (
                <TableCell key={d.toString()} align="center">
                  {d.toString()}
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
