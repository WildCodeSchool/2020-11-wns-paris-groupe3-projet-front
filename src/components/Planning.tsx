import React, { useState } from 'react';
import Agenda from './Agenda';
import FormNewTask from './FormNewTask';
import moment from 'moment';

export type PlanningProps = {
  start: Date;
  end: Date;
  title: string;
};

const Planning = (): JSX.Element => {
  const [end, setEnd] = useState<Date>(moment().add(1, 'days').toDate());
  const [start, setStart] = useState<Date>(moment().toDate());
  const [title, setTitle] = useState<string>('Hello dear friend');
  const [events, setEvents] = useState<PlanningProps[]>([
    {
      start: start,
      end: end,
      title: title,
    },
  ]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEvents([{ ...events, start, end, title }]);
  };

  return (
    <div>
      <Agenda events={events} />
      <FormNewTask
        end={end}
        start={start}
        title={title}
        setEnd={setEnd}
        setStart={setStart}
        setTitle={setTitle}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Planning;
