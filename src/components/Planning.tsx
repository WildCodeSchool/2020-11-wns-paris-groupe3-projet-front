import React, { useState } from 'react';
import Agenda from './Agenda';
import FormNewTask from './FormNewTask';
import moment from 'moment';

export type TaskProps = {
  start: Date;
  end: Date;
  title: string;
};

const Planning = (): JSX.Element => {
  const [task, setTask] = useState<TaskProps>({
    start: moment().toDate(),
    end: moment().add(1, 'days').toDate(),
    title: '',
  });

  const [events, setEvents] = useState<TaskProps[]>([task]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const taskTemp = { ...task, [e.target.name]: e.target.value };
    setTask(taskTemp);
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const eventsTemp: TaskProps[] = [...events];
    eventsTemp.push(task);
    setEvents(eventsTemp);
  };

  return (
    <div>
      <Agenda events={events} />
      <FormNewTask task={task} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Planning;
