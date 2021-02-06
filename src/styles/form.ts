import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import theme from '../theme';

export const Form = styled.form`
  width: 500px;
  margin: auto;
`;

export const Error = styled.p`
  color: ${theme.palette.error.main};
`;

export const TextInput = styled(TextField)`
  width: 500px;
`;
