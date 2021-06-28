import styled from 'styled-components';

export const FirstHeader = styled.h1`
  font-family: montserrat, sans-serif;
  font-weight: 400;
  font-size: 3vw;
  @media (max-width: 1000px) {
    margin: 20px 20px;
    font-size: 5vw;
  }
`;

export const Container = styled.div`
  margin: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
  }
  > div:last-child {
    display: flex;
    align-items: center;
    @media (max-width: 1000px) {
    }
    > div {
      margin: 0 20px;
      text-align: right;
      p:first-child {
        font-size: 1.5rem;
      }
    }
    > img {
      width: 100px;
      border-radius: 50px;
    }
  }
`;
