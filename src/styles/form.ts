import styled from 'styled-components';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { TextField, Button } from '@material-ui/core';
import theme from '../theme';

type ButtonProps = {
  type: string;
  disabled?: boolean;
};

export const Form = styled.form`
  width: 500px;
  margin: auto;
`;

export const Error = styled.p`
  color: ${theme.palette.error.main};
`;

export const TextInput = styled(TextField)`
  width: 500px;
  margin: 0.5rem 0 0.5rem 0;
`;

export const KeyboardDatePickerInput = styled(KeyboardDatePicker)`
  width: 500px;
  margin: 0.5rem 0 0.5rem 0;
`;

export const ButtonFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonValidate = `
  border-color: transparent;
  background-color: ${theme.palette.secondary.main};
  color: white;
  :hover {
    color: ${theme.palette.secondary.main};
    border-color: ${theme.palette.secondary.main};
  }
`;

const ButtonDisabled = `
  border-color: grey;
  color: white;
`;

export const ButtonForm = styled(Button)<ButtonProps>`
  border: 2px solid ${theme.palette.primary.main};
  color: ${theme.palette.primary.main};
  outline: none;
  cursor: pointer;
  ${({ disabled, type }) => (disabled && type === 'submit' && ButtonDisabled) || (type === 'submit' && ButtonValidate)}
`;
