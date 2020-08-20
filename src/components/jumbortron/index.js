import React from 'react';

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

Jumbortron.Item = ({ children }) => {
  return <Item>{children}</Item>;
};
