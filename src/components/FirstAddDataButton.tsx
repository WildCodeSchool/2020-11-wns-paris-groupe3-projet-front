import React from 'react';

import LinkButton from 'components/LinkButton';

import { FirstAddDataButtonContainerCenter, Title } from 'styles/data-list';

interface FirstAddDataButtonProps {
  title: string;
}

const FirstAddDataButton = ({ title }: FirstAddDataButtonProps): JSX.Element => {
  return (
    <FirstAddDataButtonContainerCenter>
      <Title>{title}</Title>
      <LinkButton to="/" label="C'est par ici !" color="secondary" />
    </FirstAddDataButtonContainerCenter>
  );
};

export default FirstAddDataButton;
