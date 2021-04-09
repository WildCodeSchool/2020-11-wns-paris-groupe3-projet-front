import styled from 'styled-components';
import { ButtonGroup } from '@material-ui/core/';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Buttoncontainer = styled(ButtonGroup)`
  @media (max-width: 500px) {
    font-size: 0.8rem;
    margin: 20px 0;
  }
`;

export const Button = styled.form`
  display: flex;
  justify-content: space-around;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: white;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
