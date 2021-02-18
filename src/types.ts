// Objects
export type Task = {
  taskname: string;
  url: string;
};

export type TaskAssignation = {
  _id: string;
  task: Task;
  end_date: Date;
  affectedTo: Classroom;
};

export type Classroom = {
  classname: string;
  // users: User;
};

// Functions
export type HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;
