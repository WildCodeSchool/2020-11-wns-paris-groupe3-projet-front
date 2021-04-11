import React from 'react';
import moment from 'moment';
import { Modal, Backdrop, Fade, ListItem, List, Divider } from '@material-ui/core';

import { TaskAssignation, OnClick } from '../../../../types';

import { useStyles } from '../../../../styles/modal';

interface CalendarDailyTasksProps {
  tasksToDisplay: TaskAssignation[];
  open: boolean;
  handleClose: OnClick;
}

const CalendarDailyTasksModal = ({ tasksToDisplay, open, handleClose }: CalendarDailyTasksProps): JSX.Element => {
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
            <>
              <ListItem key={assign._id} button>
                <p>
                  <strong>Titre du devoir :</strong> {assign.task.taskname} <br />
                  <strong>Assignée à la classe :</strong> {assign.affectedTo.classname} <br />
                  <strong>Date de rendu :</strong> {moment(assign.end_date).locale('fr').format('dddd Do MMMM YYYY')}
                </p>
              </ListItem>
              {tasksToDisplay[tasksToDisplay.length - 1] !== assign && <Divider />}
            </>
          ))}
        </List>
      </Fade>
    </Modal>
  );
};

export default CalendarDailyTasksModal;
