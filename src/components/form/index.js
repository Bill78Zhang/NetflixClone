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
} from './styles/form';
export default function Form({ children, ...restPorps }) {
  return <Container {...restPorps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restPorps }) {
  <Base {...restPorps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restPorps }) {
  <Title {...restPorps}>{children}</Title>;
};

Form.Error = function FormError({ children, ...restPorps }) {
  <Error {...restPorps}>{children}</Error>;
};

Form.Input = function FormInput({ children, ...restPorps }) {
  <Input {...restPorps}>{children}</Input>;
};
Form.Submit = function FormSubmit({ children, ...restPorps }) {
  <Submit {...restPorps}>{children}</Submit>;
};

Form.Text = function FormText({ children, ...restPorps }) {
  <Text {...restPorps}>{children}</Text>;
};

Form.SmallText = function FormSmallText({ children, ...restPorps }) {
  <SmallText {...restPorps}>{children}</SmallText>;
};
