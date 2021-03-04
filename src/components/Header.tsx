import React from 'react';

import { HeaderProps } from '../types';

const Header = ({ label }: HeaderProps): JSX.Element => {
  return <h1>{label}</h1>;
};

export default Header;
