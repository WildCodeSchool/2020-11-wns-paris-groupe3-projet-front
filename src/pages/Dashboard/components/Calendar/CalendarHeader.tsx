import React from 'react';

import { CalendarHeaderStyled, CalendarHeaderPrev, CalendarHeaderNext } from 'styles/calendar';

interface CalendarHeaderProps {
  currMonthName: () => string;
  currYear: () => string;
  prevMonth: () => moment.Moment;
  nextMonth: () => moment.Moment;
  setValue: (value: React.SetStateAction<moment.Moment>) => void;
}

const CalendarHeader = ({
  currMonthName,
  currYear,
  prevMonth,
  nextMonth,
  setValue,
}: CalendarHeaderProps): JSX.Element => {
  return (
    <CalendarHeaderStyled>
      <CalendarHeaderPrev onClick={() => setValue(prevMonth())}>{String.fromCharCode(171)}</CalendarHeaderPrev>
      <div>
        {currMonthName()} {currYear()}
      </div>
      <CalendarHeaderNext onClick={() => setValue(nextMonth())}>{String.fromCharCode(187)}</CalendarHeaderNext>
    </CalendarHeaderStyled>
  );
};

export default CalendarHeader;
