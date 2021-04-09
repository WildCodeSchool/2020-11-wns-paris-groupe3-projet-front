import React from 'react';
import Button from '@material-ui/core/Button';

import { Edit, Delete } from '../styles/data-list';

interface IconButtonProps {
  type: string;
}

const IconButton = ({ type }: IconButtonProps): JSX.Element => {
  return <Button size="small">{type === 'edit' ? <Edit /> : <Delete />}</Button>;
};

export default IconButton;
