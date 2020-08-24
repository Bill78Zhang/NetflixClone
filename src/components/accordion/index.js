import React, { useState, useContext, createContext } from 'react';
import {
  Container,
  Inner,
  Item,
  Title,
  Header,
  Body,
  Frame,
} from './styles/accordion';

const AccordionContext = createContext();
export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <AccordionContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </AccordionContext.Provider>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(AccordionContext);

  return (
    <Header {...restProps} onClick={() => setToggleShow(!toggleShow)}>
      {children}
      {toggleShow ? (
        <img src='images/icons/close-slim.png' alt='close' />
      ) : (
        <img src='images/icons/add.png' alt='open' />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(AccordionContext);
  return toggleShow && <Body {...restProps}>{children}</Body>;
};
