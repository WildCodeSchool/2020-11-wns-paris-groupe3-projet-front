import styled from 'styled-components';

type DayDivProps = {
  isToday: boolean;
  beforeToday: boolean;
  isSelected: boolean;
};

type DayDivTaskProps = {
  hasEvent: boolean;
};

export const CalendarContainer = styled.div`
  box-sizing: border-box;
  font-size: 1rem;
  max-width: 400px;
  margin: auto;
`;

export const CalendarHeader = styled.div`
  background-color: lightblue;
  text-align: center;
  min-height: 2rem;
  line-height: 2rem;
  color: black;
  font-weight: 700;
  display: flex;
  border-radius: 5px 5px 0 0;
`;

export const Body = styled.div`
  border: 1px solid lightblue;
  border-radius: 0 0 5px 5px;
`;

export const CalendarHeaderPrev = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 1rem;
`;

export const CalendarHeaderNext = styled.div`
  flex: 1;
  text-align: right;
  margin-right: 1rem;
`;

export const Week = styled.div`
  background-color: white;
  width: calc(100% / 7);
  line-height: 44px;
  text-align: center;
  text-transform: uppercase;
  color: black;
  font-weight: 400;
`;

export const WeekDiv = styled.div`
  width: 100%;
`;

export const Day = styled.div`
  position: relative;
  width: calc(100% / 7);
  height: 44px;
  display: inline-block;
  background-color: white;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: 1;
  text-align: center;
`;

export const DayDivBefore = `
  color: grey;
  border-radius: 5px;
`;

export const DayDivSelected = `
  background-color: red;
  color: white;
  border-radius: 5px;
  font-weight: bold;
`;

export const DayDivToday = `
  background-color: grey;
  border-radius: 5px;
`;

export const DayDiv = styled.div<DayDivProps>`
  width: 100%;
  height: 44px;
  position: absolute;
  color: black;
  z-index: 100;
  line-height: 44px;
  ${({ isToday }) => isToday && DayDivToday}
  ${({ beforeToday }) => beforeToday && DayDivBefore}
  ${({ isSelected }) => isSelected && DayDivSelected}
`;

export const DayDivTaskHasEvent = `
  background-color: purple;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  bottom: 3px;
  left: 22px;
  z-index: 1000;
  position: absolute;
`;

export const DayDivTask = styled.div<DayDivTaskProps>`
  ${({ hasEvent }) => hasEvent && DayDivTaskHasEvent}
`;

export const DayNames = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
`;
