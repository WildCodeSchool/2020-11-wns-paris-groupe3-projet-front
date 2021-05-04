import React, { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';

import CalendarBody from './CalendarBody';
import CalendarDailyTasksModal from './CalendarDailyTasksModal';
import CalendarHeader from './CalendarHeader';

import { AssignmentType } from 'types';

import { CalendarContainerStyled } from 'styles/calendar';

interface CalendarProps {
  assignments: AssignmentType[];
}

export const CalendarContainer = ({ assignments }: CalendarProps): JSX.Element => {
  const [tasksToDisplay, setTasksToDisplay] = useState<AssignmentType[]>([]);
  const [value, setValue] = useState(moment());
  const [calendar, setCalendar] = useState<Moment[][]>([]);
  const daysNames = ['l', 'm', 'm', 'j', 'v', 's', 'd'];
  const startDay = value.clone().startOf('month').startOf('week');
  const endDay = value.clone().endOf('month').endOf('week');
  const [open, setOpen] = useState(false);

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
    assignments.forEach((assign) => {
      if (day.isSame(new Date(assign.end_date), 'day')) {
        result = day.isSame(new Date(assign.end_date), 'day');
      }
    });
    return result;
  };

  const displayTasks = (day: Moment) => {
    const tasksToDisplayTmp = assignments.filter(
      (assign) => moment(assign.end_date).format('YYYY-MM-DD') === day.format('YYYY-MM-DD'),
    );
    setValue(day);
    setTasksToDisplay(tasksToDisplayTmp);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const day = startDay.subtract(1, 'day').clone();
    const calendarTmp = [];
    while (day.isBefore(endDay, 'day')) {
      calendarTmp.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, 'day').clone()),
      );
    }
    setCalendar(calendarTmp);
  }, [value]);

  return (
    <>
      <CalendarContainerStyled>
        <CalendarHeader
          currMonthName={currMonthName}
          currYear={currYear}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
          setValue={setValue}
        />
        <CalendarBody
          daysNames={daysNames}
          calendar={calendar}
          displayTasks={displayTasks}
          isToday={isToday}
          beforeToday={beforeToday}
          isSelected={isSelected}
          hasEvent={hasEvent}
        />
      </CalendarContainerStyled>
      {tasksToDisplay.length > 0 && (
        <CalendarDailyTasksModal tasksToDisplay={tasksToDisplay} open={open} handleClose={handleClose} />
      )}
    </>
  );
};
