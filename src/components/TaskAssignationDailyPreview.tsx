import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

import { TaskAssignation } from '../types';

interface TaskAssignationDailyPreviewProps {
  tasksToDisplay: TaskAssignation[];
}

const TaskAssignationDailyPreview = ({ tasksToDisplay }: TaskAssignationDailyPreviewProps): JSX.Element => {
  return (
    <div>
      <List component="nav" aria-label="secondary mailbox folders">
        {tasksToDisplay.map((assign) => (
          <ListItem key={assign._id} button>
            {assign.task.taskname} a été assigné à la classe {assign.affectedTo.classname}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskAssignationDailyPreview;
