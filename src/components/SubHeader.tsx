import React from 'react';

export interface SubHeaderProps {
  title: string;
}

const SubHeader = ({ title }: SubHeaderProps): JSX.Element => {
  return <h1>{title}</h1>;
};

export default SubHeader;
