import React from 'react';
import { Header } from '../components';
import { FeatureContainer } from '../containers/feature';
export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to='/home' src='/images/misc/logo.svg' alt='Netflix' />
        <Header.ButtonLink to='/singin'>Sign In</Header.ButtonLink>
      </Header.Frame>
      <FeatureContainer />
    </Header>
  );
}
