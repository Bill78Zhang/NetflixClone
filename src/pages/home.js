import React from 'react';
import { JumbortronContainer } from '../containers/jumbortron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
import { HeaderContainer } from '../containers/header';
import { FeatureContainer } from '../containers/feature';

const Home = () => {
  return (
    <React.Fragment>
      <HeaderContainer>
        <FeatureContainer />
      </HeaderContainer>
      <JumbortronContainer />
      <FaqsContainer />
      <FooterContainer />
    </React.Fragment>
  );
};

export default Home;
