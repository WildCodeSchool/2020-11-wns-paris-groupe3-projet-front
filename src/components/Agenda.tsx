import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const ALL_TASKS = gql`
  query GetAllTasks {
    allTasks {
      id
      title
      start
      end
    }
  }
`;

const Agenda = (): JSX.Element => {
  const { loading, error, data } = useQuery(ALL_TASKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="App">
      <Calendar
        defaultDate={moment().toDate()}
        defaultView="month"
        localizer={localizer}
        events={data.allTasks}
        style={{ height: '50vh', width: '50vw', margin: 'auto' }}
      />
    </div>
  );
};

export default Agenda;
