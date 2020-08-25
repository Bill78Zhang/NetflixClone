import React from 'react';

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
