import React from 'react';

import LinkButton from '../components/LinkButton';

import { ContainerCenter, Title } from '../styles/data-list';

interface NoDataProps {
  title: string;
}

const NoData = ({ title }: NoDataProps): JSX.Element => {
  return (
    <ContainerCenter>
      <Title>{title}</Title>
      <LinkButton to="/" label="Cest par ici !" color="secondary" />
    </ContainerCenter>
  );
};

export default NoData;
