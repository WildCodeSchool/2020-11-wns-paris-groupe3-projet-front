import React from 'react';
interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps): JSX.Element => {
  return <h1>{label}</h1>;
};

export default Header;
