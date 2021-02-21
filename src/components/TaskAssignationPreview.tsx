import React from 'react';
import moment from 'moment';
import { ListItem, List } from '@material-ui/core';

import { TaskAssignation } from '../types';

interface TaskAssignationPreviewProps {
  tasksToDisplay: TaskAssignation[];
  daily: boolean;
}

const TaskAssignationPreview = ({ tasksToDisplay, daily }: TaskAssignationPreviewProps): JSX.Element => {
  return (
    <div>
      <List component="nav" aria-label="secondary mailbox folders">
        {tasksToDisplay.map((assign) => (
          <ListItem key={assign._id} button>
            {assign.task.taskname} a été assigné à la classe {assign.affectedTo.classname}{' '}
            {!daily && `et doit être rendu le ${moment(assign.end_date).locale('fr').format('dddd Do MMMM YYYY')}`}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskAssignationPreview;
