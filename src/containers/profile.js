import React from 'react';
import { Profile } from '../components';
import { Header } from '../components';

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to='/home' src='/images/misc/logo.svg' alt='Netflix' />
        </Header.Frame>
      </Header>

      <Profile>
        <Profile.Title>Who's watching</Profile.Title>
        <Profile.List>
          <Profile.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }>
            <Profile.Picture src={user.photoURL} />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  );
}
