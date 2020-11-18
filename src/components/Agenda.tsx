import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { TaskProps } from './Planning';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

interface PropsTest {
  events: TaskProps[];
}

const Agenda = ({ events }: PropsTest): JSX.Element => {
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
