import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { UserType } from '../../../types';

import { CardStyled, CardActionAreaStyled, CardMediaStyled } from '../../../styles/classroom';

interface ClassroomCardProps {
  user: UserType;
}

const ClassroomCard = ({ user }: ClassroomCardProps): JSX.Element => {
  return (
    <CardStyled>
      <CardActionAreaStyled>
        <CardMediaStyled
          image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          title="profile picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {user.firstname + ' ' + user.lastname}
          </Typography>
        </CardContent>
      </CardActionAreaStyled>
    </CardStyled>
  );
};

export default ClassroomCard;
