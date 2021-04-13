import React from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core';

import NewAssignment from 'pages/Dashboard/components/Form/NewAssignment';
import NewTask from 'pages/Dashboard/components/Form/NewTask';
import CalendarDailyTasks from 'pages/Dashboard/components/Calendar/CalendarDailyTasks';

import { AssignmentType, OnClick } from 'types';

import { useStyles } from 'styles/modal';

interface MyModalProps {
  elementToRender: AssignmentType[];
  open: boolean;
  handleClose: OnClick;
  renderType: string;
}

const MyModal = ({ elementToRender, open, handleClose, renderType }: MyModalProps): JSX.Element => {
  const classes = useStyles();

  const ModalContent = () => {
    switch (renderType) {
      case 'calendar-daily-tasks':
        return <CalendarDailyTasks elementToRender={elementToRender} />;
      case 'new-task':
        return <NewTask />;
      case 'new-assignment':
        return <NewAssignment />;
    }
  };

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
      <Fade in={open}>{ModalContent()}</Fade>
    </Modal>
  );
};

export default MyModal;
