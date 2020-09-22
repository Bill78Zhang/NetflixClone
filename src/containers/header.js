import React from 'react';
import { Header } from '../components';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to='/' src='/images/misc/logo.svg' alt='Netflix' />
        <Header.ButtonLink to='/signin'>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
