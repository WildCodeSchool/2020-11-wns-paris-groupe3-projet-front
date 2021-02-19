// Objects
export type Task = {
  _id: string;
  taskname: string;
  url: string;
};

export type Classroom = {
  _id: string;
  classname: string;
  // users: User;
};

export type TaskAssignation = {
  _id: string;
  task: Task;
  end_date: Date;
  affectedTo: Classroom;
};

export type NewAssignation = {
  task: string;
  end_date: string;
  affectedTo: string;
};

// Functions
export type HandleChange = (e: React.ChangeEvent<HTMLInputElement> | Date | null) => void;
export type HandleChangeAssignation = (
  e: React.ChangeEvent<Record<string, unknown>>,
  value: Task | Classroom | null,
) => void;
export type HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;
