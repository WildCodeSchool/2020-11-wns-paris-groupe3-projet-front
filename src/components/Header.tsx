import React from 'react';

import { FirstHeader } from '../styles/header';
interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps): JSX.Element => {
  return <FirstHeader>{label}</FirstHeader>;
};

export default Header;
