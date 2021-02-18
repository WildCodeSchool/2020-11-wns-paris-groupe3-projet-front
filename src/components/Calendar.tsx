import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { TaskAssignation } from '../types';

import './style.css';

interface CalendarProps {
  assignations: TaskAssignation[];
}

const Calendar = ({ assignations }: CalendarProps): JSX.Element => {
  const [value, setValue] = useState(moment());
  const [calendar, setCalendar] = useState([]);
  const daysNames = ['l', 'm', 'm', 'j', 'v', 's', 'd'];
  const startDay = value.clone().startOf('month').startOf('week');
  const endDay = value.clone().endOf('month').endOf('week');

  useEffect(() => {
    const day = startDay.clone();
    const calendarTmp: any = [];
    while (day.isBefore(endDay, 'day')) {
      calendarTmp.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, 'day').clone()),
      );
    }
    setCalendar(calendarTmp);
  }, [value]);

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

  const isSelected = (day: any) => {
    return value.isSame(day, 'day');
  };

  const beforeToday = (day: any) => {
    return day.isBefore(new Date(), 'day');
  };

  const isToday = (day: any) => {
    return day.isSame(new Date(), 'day');
  };

  const hasEvent = (day: any) => {
    let result = '';
    assignations.forEach((assign) => {
      if (day.isSame(new Date(assign.end_date), 'day')) {
        result = day.isSame(new Date(assign.end_date), 'day');
      }
    });
    return result;
  };

  const dayStyles = (day: any) => {
    if (beforeToday(day)) return 'before';
    if (isSelected(day)) return 'selected';
    if (isToday(day)) return 'today';
  };

  const eventStyles = (day: any) => {
    if (hasEvent(day)) return 'event';
  };

  return (
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
        {calendar.map((week: string[], i) => (
          <div key={i}>
            {week.map((day: any, i: number) => (
              <div key={i} className="day" onClick={() => setValue(day)}>
                <div className={dayStyles(day)}>{day.format('D').toString()}</div>
                <div className={eventStyles(day)} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
