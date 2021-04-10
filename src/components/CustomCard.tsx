import React from 'react';

import { UserType } from '../types';

interface CustomCardProps {
  user: UserType;
}

const CustomCard = ({ user }: CustomCardProps): JSX.Element => {
  return (
    <div>
      <p>{user.firstname + ' ' + user.lastname}</p>
    </div>
  );
};

export default CustomCard;
