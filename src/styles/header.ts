import styled from 'styled-components';

export const FirstHeader = styled.h1`
  font-family: montserrat, sans-serif;
  font-weight: 600;
  font-size: 3vw;
  margin: 40px 20px;
  @media (max-width: 1000px) {
    margin: 20px 20px;
    font-size: 5vw;
  }
`;

export const SecondHeader = styled.h2`
  font-family: montserrat, sans-serif;
  font-weight: 300;
  font-size: 2vw;
  @media (max-width: 500px) {
    margin-bottom: 0.5rem;
    font-size: 3vw;
  }
  @media (max-width: 1000px) {
    font-size: 3vw;
  }
`;
