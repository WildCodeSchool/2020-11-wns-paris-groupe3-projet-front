import React, { useState } from 'react';
import { Button, ButtonGroup } from '@material-ui/core/';

import CalendarContainer from './components/Calendar';
import MyModal from 'components/MyModal';

import { AssignmentType } from 'types';

import { DashboardContainer } from 'styles/dashboard';

interface DashboardViewTeacherProps {
  assignments: AssignmentType[];
}

const DashboardViewTeacher = ({ assignments }: DashboardViewTeacherProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [renderType, setRenderType] = useState('');

  const handleOpenNewTask = () => {
    setRenderType('new-task');
    setOpen(true);
  };
  const handleOpenNewAssignment = () => {
    setRenderType('new-assignment');
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setRenderType('');
  };

  return (
    <DashboardContainer>
      <div>
        <ButtonGroup variant="contained" color="primary">
          <Button onClick={handleOpenNewTask}>Créer un nouveau devoir</Button>
          <Button onClick={handleOpenNewAssignment}>Assigner un devoir à une classe</Button>
        </ButtonGroup>
      </div>
      <div>
        <CalendarContainer assignments={assignments} />
      </div>
      {open && <MyModal elementToRender={assignments} open={open} handleClose={handleClose} renderType={renderType} />}
    </DashboardContainer>
  );
};

export default DashboardViewTeacher;
