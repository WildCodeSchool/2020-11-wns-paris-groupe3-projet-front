import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, ListItem, List } from '@material-ui/core';

import { TaskAssignation } from '../types';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

interface CalendarDailyTasksProps {
  tasksToDisplay: TaskAssignation[];
  open: boolean;
  handleClose: any;
}

const CalendarDailyTasks = ({ tasksToDisplay, open, handleClose }: CalendarDailyTasksProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <List component="nav" aria-label="secondary mailbox folders" className={classes.paper}>
          {tasksToDisplay.map((assign) => (
            <ListItem key={assign._id} button>
              {assign.task.taskname} a été assigné à la classe {assign.affectedTo.classname} et doit être rendu le{' '}
              {moment(assign.end_date).locale('fr').format('dddd Do MMMM YYYY')}
            </ListItem>
          ))}
        </List>
      </Fade>
    </Modal>
  );
};

export default CalendarDailyTasks;
