import React, { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';

import { TaskAssignation } from '../types';

import TaskAssignationDailyPreview from './TaskAssignationDailyPreview';

import './style.css';

interface CalendarProps {
  assignations: TaskAssignation[];
}

const Calendar = ({ assignations }: CalendarProps): JSX.Element => {
  const [tasksToDisplay, setTasksToDisplay] = useState<TaskAssignation[]>([]);
  const [value, setValue] = useState(moment());
  const [calendar, setCalendar] = useState<Moment[][]>([]);
  const daysNames = ['l', 'm', 'm', 'j', 'v', 's', 'd'];
  const startDay = value.clone().startOf('month').startOf('week');
  const endDay = value.clone().endOf('month').endOf('week');

  const currMonthName = () => {
    return value.format('MMMM');
  };

  const currYear = () => {
    return value.format('YYYY');
  };

  const prevMonth = () => {
    return value.clone().subtract(1, 'month');
  };

  const nextMonth = () => {
    return value.clone().add(1, 'month');
  };

  const isSelected = (day: Moment) => {
    return value.isSame(day, 'day');
  };

  const beforeToday = (day: Moment) => {
    return day.isBefore(new Date(), 'day');
  };

  const isToday = (day: Moment) => {
    return day.isSame(new Date(), 'day');
  };

  const hasEvent = (day: Moment) => {
    let result = false;
    assignations.forEach((assign) => {
      if (day.isSame(new Date(assign.end_date), 'day')) {
        result = day.isSame(new Date(assign.end_date), 'day');
      }
    });
    return result;
  };

  const dayStyles = (day: Moment) => {
    if (beforeToday(day)) return 'before';
    if (isSelected(day)) return 'selected';
    if (isToday(day)) return 'today';
  };

  const eventStyles = (day: Moment) => {
    if (hasEvent(day)) return 'event';
  };

  const displayTasks = (day: Moment) => {
    const tasksToDisplayTmp = assignations.filter(
      (assign) => moment(assign.end_date).format('YYYY-MM-DD') === day.format('YYYY-MM-DD'),
    );
    setValue(day);
    setTasksToDisplay(tasksToDisplayTmp);
  };

  useEffect(() => {
    const day = startDay.clone();
    const calendarTmp = [];
    while (day.isBefore(endDay, 'day')) {
      calendarTmp.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, 'day').clone()),
      );
    }
    setCalendar(calendarTmp);
    displayTasks(value);
  }, [value]);

  return (
    <>
      <div className="calendar">
        <div className="header">
          <div className="previous" onClick={() => setValue(prevMonth())}>
            {String.fromCharCode(171)}
          </div>
          <div className="current">
            {currMonthName()} {currYear()}
          </div>
          <div className="next" onClick={() => setValue(nextMonth())}>
            {String.fromCharCode(187)}
          </div>
        </div>
        <div className="body">
          <div className="day-names">
            {daysNames.map((d, i) => (
              <div key={i} className="week">
                {d}
              </div>
            ))}
          </div>
          {calendar.map((week, i) => (
            <div key={i}>
              {week.map((day: Moment, i) => (
                <div key={i} className="day" onClick={() => displayTasks(day)}>
                  <div className={dayStyles(day)}>{day.format('D').toString()}</div>
                  <div className={eventStyles(day)} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <TaskAssignationDailyPreview tasksToDisplay={tasksToDisplay} />
    </>
  );
};

export default Calendar;
