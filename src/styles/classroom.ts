import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

export const CardStyled = styled(Card)`
  min-width: 310px;
  margin: 10px;
`;

export const CardActionAreaStyled = styled(CardActionArea)`
  display: flex;
  margin: 10px;
  justify-content: flex-start;
`;

export const CardMediaStyled = styled(CardMedia)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
