import React, { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';

import TaskAssignationDailyPreview from './TaskAssignationDailyPreview';

import { TaskAssignation } from '../types';

import {
  CalendarContainer,
  CalendarHeader,
  Body,
  CalendarHeaderPrev,
  CalendarHeaderNext,
  Week,
  Day,
  DayDiv,
  DayDivTask,
  DayNames,
} from '../styles/calendar';

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
      <CalendarContainer>
        <CalendarHeader>
          <CalendarHeaderPrev onClick={() => setValue(prevMonth())}>{String.fromCharCode(171)}</CalendarHeaderPrev>
          <div>
            {currMonthName()} {currYear()}
          </div>
          <CalendarHeaderNext onClick={() => setValue(nextMonth())}>{String.fromCharCode(187)}</CalendarHeaderNext>
        </CalendarHeader>
        <Body>
          <DayNames>
            {daysNames.map((d, i) => (
              <Week key={i}>{d}</Week>
            ))}
          </DayNames>
          {calendar.map((week, i) => (
            <div key={i}>
              {week.map((day: Moment, i) => (
                <Day key={i} onClick={() => displayTasks(day)}>
                  <DayDiv isToday={isToday(day)} beforeToday={beforeToday(day)} isSelected={isSelected(day)}>
                    {day.format('D').toString()}
                  </DayDiv>
                  <DayDivTask hasEvent={hasEvent(day)} />
                </Day>
              ))}
            </div>
          ))}
        </Body>
      </CalendarContainer>
      <TaskAssignationDailyPreview tasksToDisplay={tasksToDisplay} />
    </>
  );
};

export default Calendar;
