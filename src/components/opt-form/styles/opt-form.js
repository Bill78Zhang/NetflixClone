import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: warp;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 70px;
  max-width: 450px;
  padding: 10px;
  font-size: 26px;
  margin: auto;
  border: 0;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: white;
  background-color: #e50914;
  height: 92px;
  padding: 0 32px;
  max-width: 450px;
  width: 400px;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  font-size: 26px;
  line-height: normal;

  &:hover {
    background-color: #f40612;
  }

  img {
    margin-left: 10px;
    width: 24px;
    filter: brightness(0) invert(1);
    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin: 20px auto;
    font-weight: bold;
    width: 200px;
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

export const Break = styled.div`
  display: flex;
  margin: auto;

  @media (max-width: 1000px) {
    width: 80%;
    flex-direction: column;
  }
`;
