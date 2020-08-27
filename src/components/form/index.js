import React from 'react';
import {
  Container,
  Base,
  Title,
  Error,
  Input,
  Submit,
  Text,
  SmallText,
  Link,
} from './styles/form';
export default function Form({ children, ...restPorps }) {
  return <Container {...restPorps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restPorps }) {
  return <Base {...restPorps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restPorps }) {
  return <Title {...restPorps}>{children}</Title>;
};

Form.Error = function FormError({ children, ...restPorps }) {
  return <Error {...restPorps}>{children}</Error>;
};

Form.Input = function FormInput({ children, ...restPorps }) {
  return <Input {...restPorps}>{children}</Input>;
};
Form.Submit = function FormSubmit({ children, ...restPorps }) {
  return <Submit {...restPorps}>{children}</Submit>;
};

Form.Text = function FormText({ children, ...restPorps }) {
  return <Text {...restPorps}>{children}</Text>;
};

Form.SmallText = function FormSmallText({ children, ...restPorps }) {
  return <SmallText {...restPorps}>{children}</SmallText>;
};

Form.Link = function FormLink({ children, ...restPorps }) {
  return <Link {...restPorps}>{children}</Link>;
};
