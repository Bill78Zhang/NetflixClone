import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 500;
  max-width: 1000px;

  @media (max-width: 1000px) {
    font-size: 26px;
    max-width: 600px;
    text-align: center;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 26px;
  font-weight: 500;
  max-width: 1000px;

  @media (max-width: 1000px) {
    font-size: 16px;
    text-align: center;
  }
`;
