import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { UserType } from '../../../types';

interface ClassroomCardProps {
  user: UserType;
}

const useStyles = makeStyles({
  root: {
    minWidth: 320,
    marginBottom: '20px',
  },
  content: {
    display: 'flex',
    margin: '10px',
    justifyContent: 'flex-start',
  },
  media: {
    width: 80,
    height: 80,
    borderRadius: '50%',
  },
});

const ClassroomCard = ({ user }: ClassroomCardProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.content}>
        <CardMedia
          className={classes.media}
          image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          title="profile picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {user.firstname + ' ' + user.lastname}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ClassroomCard;
