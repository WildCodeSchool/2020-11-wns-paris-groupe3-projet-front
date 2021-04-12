import React from 'react';
import { Moment } from 'moment';

import { Body, Week, Day, DayDiv, DayDivTask, DayNames } from 'styles/calendar';

interface CalendarBodyProps {
  daysNames: string[];
  calendar: Moment[][];
  displayTasks: (day: Moment) => void;
  isToday: (day: Moment) => boolean;
  beforeToday: (day: Moment) => boolean;
  isSelected: (day: Moment) => boolean;
  hasEvent: (day: Moment) => boolean;
}

const CalendarBody = ({
  daysNames,
  calendar,
  displayTasks,
  isToday,
  beforeToday,
  isSelected,
  hasEvent,
}: CalendarBodyProps): JSX.Element => {
  return (
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
  );
};

export default CalendarBody;
