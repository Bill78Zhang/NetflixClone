import React, { useState, useContext } from 'react';
import {
  Container,
  Group,
  Text,
  Title,
  Entities,
  Item,
  SubTitle,
  Image
} from './styles/card';
const FeatureConetext = React.createContext();

export default function Card({ children, ...restProps }) {
  const { showFeature, setShowFeature } = useState(false);
  const { featureItem, setFeatureItem } = useState('');

  return (
    <FeatureConetext.Provider
      value={{ showFeature, setShowFeature, featureItem, setFeatureItem }}>
      <Container {...restProps}>{children}</Container>
    </FeatureConetext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.CardItem = function CardItem({ item, children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
