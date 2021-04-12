import styled from 'styled-components';
import theme from 'theme';

type DayDivProps = {
  isToday: boolean;
  beforeToday: boolean;
  isSelected: boolean;
};

type DayDivTaskProps = {
  hasEvent: boolean;
};

export const CalendarContainerStyled = styled.div`
  box-sizing: border-box;
  font-size: 1rem;
  width: 400px;
  box-shadow: 0px 7px 22px -7px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export const CalendarHeaderStyled = styled.div`
  background-color: ${theme.palette.primary.main};
  text-align: center;
  min-height: 2rem;
  line-height: 2rem;
  color: white;
  font-weight: 700;
  display: flex;
  border-radius: 8px 8px 0 0;
`;

export const Body = styled.div`
  padding: 0.5rem;
`;

export const CalendarHeaderPrev = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 1rem;
  cursor: pointer;
`;

export const CalendarHeaderNext = styled.div`
  flex: 1;
  text-align: right;
  margin-right: 1rem;
  cursor: pointer;
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
  cursor: pointer;
`;

const DayDivBefore = `
  color: grey;
  border-radius: 5px;
`;

const DayDivSelected = `
  background-color: ${theme.palette.primary.main};
  color: white;
  border-radius: 5px;
  font-weight: bold;
`;

const DayDivToday = `
  background-color: rgba(236,152,47,0.5);
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
  background-color: ${theme.palette.secondary.main};
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
