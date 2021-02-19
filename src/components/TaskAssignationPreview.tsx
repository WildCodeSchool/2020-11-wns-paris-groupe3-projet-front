import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import { ListItem, List } from '@material-ui/core';

import { TaskAssignation } from '../types';

interface TaskAssignationPreviewProps {
  assignations: TaskAssignation[];
}

const TaskAssignationPreview = ({ assignations }: TaskAssignationPreviewProps): JSX.Element => {
  return (
    <List component="nav" aria-label="secondary mailbox folders">
      {assignations.map((assign) => (
        <ListItem key={assign._id} button>
          {assign.task.taskname} a été assigné à la classe {assign.affectedTo.classname} et doit être rendu le{' '}
          {moment(assign.end_date).locale('fr').format('dddd Do MMMM YYYY')}
        </ListItem>
      ))}
    </List>
  );
};

export default TaskAssignationPreview;
