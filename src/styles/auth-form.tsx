import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import theme from '../theme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
`;

export const Error = styled.li`
  color: ${theme.palette.error.main};
`;

export const TextInput = styled(TextField)`
  margin: 0.5rem 0 0.5rem 0;
`;

export const ButtonChangeForm = styled.button`
  border: none;
  background-color: transparent;
  color: ${theme.palette.secondary.main};
  outline: none;
  cursor: pointer;
  padding: 0;
`;

export const ContainerHome = styled(Container)`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 0;
  width: 60%;
  height: 600px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  @media (max-width: 550px) {
    width: 100%;
    box-shadow: none;
  }
`;

export const ContainerHomeForm = styled(Container)`
  padding: 2rem;
  width: 50%;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ContainerHomeLogo = styled(Container)`
  width: 50%;
  height: 600px;
  background-color: ${theme.palette.secondary.main};
  border-radius: 0 10px 10px 0;
  display: flex;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const TitleHome = styled.h1`
  margin: 0;
`;
