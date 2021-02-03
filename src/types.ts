// Objects
export type Task = {
  taskname: string;
  url: string;
};

// Functions
export type HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;
