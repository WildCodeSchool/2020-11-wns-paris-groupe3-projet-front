import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { TaskProps } from './FormNewTask';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

interface AgendaProps {
  events: TaskProps[];
}

const localizer = momentLocalizer(moment);

const Agenda = ({ events }: AgendaProps): JSX.Element => {
  return (
    <div className="App">
      <Calendar
        defaultDate={moment().toDate()}
        defaultView="month"
        localizer={localizer}
        events={events}
        style={{ height: '50vh', width: '50vw', margin: 'auto' }}
      />
    </div>
  );
};

export default Agenda;
