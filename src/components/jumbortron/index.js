import React from 'react';
import {
  Item,
  Inner,
  Container,
  Title,
  SubTitle,
  Image,
} from './styles/jumbortron';

export default function Jumbortron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbortron.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Jumbortron.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Jumbortron.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
