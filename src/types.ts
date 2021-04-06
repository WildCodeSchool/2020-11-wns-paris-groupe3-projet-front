import { History, LocationState } from 'history';
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

export type NewAssignationType = {
  task: string;
  end_date: string;
  affectedTo: string;
};

export type NewTaskType = {
  taskname: string;
  url: string;
};

export type NewRenderType = {
  url: string;
  taskId: string;
  userId: string;
};

export type NewCorrectionType = {
  url: string;
  taskId: string;
  userId: string;
};

export type HistoryType = {
  history: History<LocationState>;
};

export type ErrorType = {
  errors: { [key: string]: string };
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
  file: NewTaskType | NewRenderType | NewCorrectionType;
  handleChange: HandleChange;
  handleSubmit: HandleSubmit;
  isLoading: boolean;
  error: boolean;
  getRootProps: GetRootProps;
  getInputProps: GetInputProps;
  isDragActive: boolean;
}

export interface UploadBoxProps {
  file: NewTaskType | NewRenderType | NewCorrectionType;
  fileType: string;
  getRootProps: GetRootProps;
  getInputProps: GetInputProps;
  isDragActive: boolean;
}
