import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  ${({ theme }) => `
    background-color: ${theme.palette.background.default};
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    padding: 7px 14px;
    ${theme.breakpoints.up('sm')} {
      background-color: red;
    };
    ${theme.breakpoints.up('md')} {
      background-color: yellow;
    };
    ${theme.breakpoints.up('lg')} {
      background-color: green;
      &:hover {
        background-color: #5469d4;
      };
    };
  `}
`;

const UpdateButton = styled(Button)`
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
    color: #fff;
    box-shadow: ${theme.shadows[2]};
    padding: 7px 14px;
    &:hover {
      background-color: #5469d4;
    }
  `}
`;

const DeleteButton = styled(Button)`
  ${({ theme }) => `
    background-color: ${theme.palette.secondary.main};
    color: #fff;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    &:hover {
      background-color: #5469d4;
    }
  `}
`;

const TaskCard = (): JSX.Element => {
  return (
    <StyledCard>
      <CardActions>
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="h2">
            Task Name
          </Typography>
        </CardActionArea>
        <UpdateButton>Update</UpdateButton>
        <DeleteButton>Delete</DeleteButton>
      </CardActions>
    </StyledCard>
  );
};

export default TaskCard;