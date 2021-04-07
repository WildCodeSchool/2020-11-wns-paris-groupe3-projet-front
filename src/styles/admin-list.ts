import styled from 'styled-components';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

import theme from '../theme';

export const TableTop = styled(TableHead)`
  background-color: ${theme.palette.primary.main};
  font-size: 30px;
`;

export const Cell = styled(TableCell)`
  font-size: 0.6em;
  color: white;
`;

export const Delete = styled(DeleteOutlineOutlinedIcon)`
  color: red;
`;

export const Edit = styled(EditOutlinedIcon)`
  color: blue;
`;
