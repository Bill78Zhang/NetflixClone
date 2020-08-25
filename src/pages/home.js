import React from 'react';
import { JumbortronContainer } from '../containers/jumbortron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
import { HeaderContainer } from '../containers/header';

const Home = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <JumbortronContainer />
      <FaqsContainer />
      <FooterContainer />
    </React.Fragment>
  );
};

export default Home;
