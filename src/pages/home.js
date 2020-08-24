import React from 'react';
import { JumbortronContainer } from '../containers/jumbortron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
const Home = () => {
  return (
    <React.Fragment>
      <JumbortronContainer />
      <FaqsContainer />
      <FooterContainer />
    </React.Fragment>
  );
};

export default Home;
