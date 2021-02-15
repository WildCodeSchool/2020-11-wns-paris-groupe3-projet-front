import { History, LocationState } from 'history';

// Objects
export type Task = {
  start: Date;
  end: Date;
  title: string;
};

export type HistoryType = {
  history: History<LocationState>;
};

// Functions
export type HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;
export type OnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
