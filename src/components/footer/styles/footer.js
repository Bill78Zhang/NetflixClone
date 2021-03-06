import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;
  padding: 70px 56px;
  flex-direction: column;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Link = styled.a`
  color: #757575;
  font-size: 16px;
  text-decoration: none;
  margin-bottom: 20px;
`;

export const Title = styled.p`
  color: #757575;
  font-size: 16px;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  color: #757575;
  font-size: 13px;
  margin-bottom: 40px;
`;
