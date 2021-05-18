import React from 'react';
import moment from 'moment';
import { ListItem, List, Divider } from '@material-ui/core';

import { AssignmentType } from 'types';

import { useStyles } from 'styles/modal';

interface CalendarDailyTasksProps {
  elementToRender: AssignmentType[];
}

const CalendarDailyTasks = ({ elementToRender }: CalendarDailyTasksProps): JSX.Element => {
  const classes = useStyles();

  return (
    <List component="nav" aria-label="secondary mailbox folders" className={classes.paper}>
      {elementToRender.map((assign) => (
        <>
          <ListItem key={assign._id} button>
            <p>
              <strong>Titre du devoir :</strong> {assign.task.taskname} <br />
              <strong>Assignée à la classe :</strong> {assign.affectedTo.classname} <br />
              <strong>Date de rendu :</strong> {moment(assign.end_date).locale('fr').format('dddd Do MMMM YYYY')}
            </p>
          </ListItem>
          {elementToRender[elementToRender.length - 1] !== assign && <Divider />}
        </>
      ))}
    </List>
  );
};

export default CalendarDailyTasks;
