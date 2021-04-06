import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.form`
  display: flex;
  justify-content: space-around;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
