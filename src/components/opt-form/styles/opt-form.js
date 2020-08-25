import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: warp;
  justify-content: center;
  height: 100%;
  margin-top: 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 70px;
  max-width: 450px;
  padding: 10px;
  font-size: 26px;
  border: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: white;
  background-color: #e50914;
  height: 92px;
  padding: 0 32px;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  font-size: 26px;

  &:hover {
    background-color: #f40612;
  }

  img {
    margin-left: 10px;
    width: 24px;
    filter: brightness(0) invert(1);
  }

  @media (max-width: 1000px) {
    margin-top: 20px;
    font-size: 16px;
    height: 50px;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 19px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
