import React from 'react';
import Button from '@material-ui/core/Button';

import { DataEditIcon, DataDeleteIcon } from 'styles/data-list';

interface IconButtonProps {
  type: string;
}

const IconButton = ({ type }: IconButtonProps): JSX.Element => {
  return <Button size="small">{type === 'edit' ? <DataEditIcon /> : <DataDeleteIcon />}</Button>;
};

export default IconButton;
