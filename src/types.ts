// Objects
export type Task = {
  taskname: string;
  url: string;
};

export type Classroom = {
  classname: string;
  users: string[];
};

export type TaskAssignation = {
  task: string;
  classroom: string;
};

// Functions
export type HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;
