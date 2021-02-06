import { DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';

// Objects
export type Task = {
  taskname: string;
  url: string;
};

export type Render = {
  url: string;
  taskId: string;
  userId: string;
};

export type Correction = {
  url: string;
  taskId: string;
  userId: string;
};

// Functions
export type HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;
export type OnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
export type GetRootProps = (props?: DropzoneRootProps) => DropzoneRootProps;
export type GetInputProps = (props?: DropzoneInputProps) => DropzoneInputProps;

// Interfaces
export interface HeaderProps {
  label: string;
}

export interface FormProps {
  file: Task | Render | Correction;
  handleChange: HandleChange;
  handleSubmit: HandleSubmit;
  isLoading: boolean;
  error: boolean;
  getRootProps: GetRootProps;
  getInputProps: GetInputProps;
  isDragActive: boolean;
}

export interface UploadBoxProps {
  file: Task | Render | Correction;
  fileType: string;
  getRootProps: GetRootProps;
  getInputProps: GetInputProps;
  isDragActive: boolean;
}
