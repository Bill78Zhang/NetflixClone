import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  max-width: 100%;
  margin: 40px auto;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 45px;
  max-width: 850px;
  align-items: center;
  margin: auto;
  @media (max-width: 600px) {
    max-width: 400px;
  }
`;

export const Frame = styled.div`
  width: 80%;
  max-width: 1200px;
  margin-bottom: 50px;
`;
export const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 1.1;
  text-align: center;
  color: white;
  @media (max-width: 600px) {
    font-size: 45px;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: white;
  align-items: center;
  cursor: pointer;
  background-color: #303030;
  border-bottom: 1px solid #757575;
  padding: 0.8em 1.2em 0.8em 1.2em;
  font-size: 26px;
  font-weight: normal;
  user-select: none;

  img {
    width: 25px;
    filter: brightness(0) invert(1);
  }

  @media (max-width: 600px) {
    font-size: 16px;
    img {
      width: 16px;
    }
  }
`;

export const Item = styled.div`
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Body = styled.div`
  padding: 0.8em 1.2em 0.8em 1.2em;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background-color: #303030;
  color: white;
  align-items: center;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
