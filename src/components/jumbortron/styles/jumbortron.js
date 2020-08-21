import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  flex-direction: ${({ direction }) => direction};
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.section`
  background-color: black;
`;

export const Panel = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    text-align: center;
    padding: 0 45px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 1.1px;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
