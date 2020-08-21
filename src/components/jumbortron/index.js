import React from 'react';
import {
  Item,
  Inner,
  Container,
  Panel,
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

Jumbortron.Panel = ({ children, ...restProps }) => {
  return <Panel {...restProps}>{children}</Panel>;
};

Jumbortron.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Jumbortron.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbortron.Image = ({ ...restProps }) => {
  return <Image {...restProps} />;
};
