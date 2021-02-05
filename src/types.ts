import { DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';

// Objects
export type Task = {
  taskname: string;
  url: string;
};

// Functions
export type HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;
export type OnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
export type GetRootProps = (props?: DropzoneRootProps) => DropzoneRootProps;
export type GetInputProps = (props?: DropzoneInputProps) => DropzoneInputProps;
