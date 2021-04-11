import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import theme from '../theme';

export const GridOnboarding = styled(Grid)`
  background-color: ${theme.palette.secondary.main};
`;

export const ButtonChangePage = styled.button`
  border: none;
  background-color: transparent;
  color: ${theme.palette.primary.main};
  outline: none;
  cursor: pointer;
  padding: 0;
`;
