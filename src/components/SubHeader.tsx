import React from 'react';

import { SecondHeader } from '../styles/header';

export interface SubHeaderProps {
  title: string;
}

const SubHeader = ({ title }: SubHeaderProps): JSX.Element => {
  return <SecondHeader>{title}</SecondHeader>;
};

export default SubHeader;
