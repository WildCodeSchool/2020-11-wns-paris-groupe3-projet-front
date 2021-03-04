import { DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';

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

export type NewTask = {
  taskname: string;
  url: string;
};

export type NewRender = {
  url: string;
  taskId: string;
  userId: string;
};

export type NewCorrection = {
  url: string;
  taskId: string;
  userId: string;
};

// Functions
export type HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type HandleChangeDate = (e: React.ChangeEvent<HTMLInputElement> | Date | null) => void;
export type HandleChangeAssignation = (
  e: React.ChangeEvent<Record<string, unknown>>,
  value: Task | Classroom | null,
) => void;
export type HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;
export type OnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
export type GetRootProps = (props?: DropzoneRootProps) => DropzoneRootProps;
export type GetInputProps = (props?: DropzoneInputProps) => DropzoneInputProps;

// Interfaces
export interface HeaderProps {
  label: string;
}

export interface FormProps {
  file: NewTask | NewRender | NewCorrection;
  handleChange: HandleChange;
  handleSubmit: HandleSubmit;
  isLoading: boolean;
  error: boolean;
  getRootProps: GetRootProps;
  getInputProps: GetInputProps;
  isDragActive: boolean;
}

export interface UploadBoxProps {
  file: NewTask | NewRender | NewCorrection;
  fileType: string;
  getRootProps: GetRootProps;
  getInputProps: GetInputProps;
  isDragActive: boolean;
}
