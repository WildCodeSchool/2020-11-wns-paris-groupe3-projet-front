import React from 'react';
import { Button } from '@material-ui/core';

import { ButtonLink } from 'styles/dashboard';

interface LinkButtonProps {
  to: string;
  label: string;
  color: 'primary' | 'secondary';
}

const LinkButton = ({ to, label, color }: LinkButtonProps): JSX.Element => {
  return (
    <Button variant="contained" color={color}>
      <ButtonLink to={to}>{label}</ButtonLink>
    </Button>
  );
};

export default LinkButton;
