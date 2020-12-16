// Objects
export type Task = {
  start: Date;
  end: Date;
  title: string;
};

// Functions
export type HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;
