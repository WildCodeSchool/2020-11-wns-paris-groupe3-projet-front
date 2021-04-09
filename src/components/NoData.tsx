import React from 'react';
import Button from '@material-ui/core/Button';

import { ButtonLink } from '../styles/dashboard';

import { ContainerCenter, Title } from '../styles/data-list';

interface NoDataProps {
  title: string;
}

const NoData = ({ title }: NoDataProps): JSX.Element => {
  return (
    <ContainerCenter>
      <Title>{title}</Title>
      <Button variant="contained" color="secondary">
        <ButtonLink to="">C&apos;est par ici !</ButtonLink>
      </Button>
    </ContainerCenter>
  );
};

export default NoData;
