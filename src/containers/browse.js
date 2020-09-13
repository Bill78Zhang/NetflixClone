import React, { useState,UseContext } from 'react';
import { FooterContainer } from '../containers/footer';
import { SelectProfileContainer } from '../containers/profile';
import { Header } from '../components';


export function BrowseContainer() {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const user = {
    displayName: 'Karal',
    photoURL: 1,
  };
  return profile.displayName ? (
    <>
      <Header src='joker1' dontShowOnSmallViewPort>     
        <Header.Frame>
          <Header.Group>
            <Header.Logo to='/home' src='/images/misc/logo.svg' alt='Netflix' />
            <Header.Link
              active={category === 'series' ? 'true' : "false"}
              onClick={() => setCategory('films')}>
              Films
            </Header.Link>

      
          </Header.Group>
        </Header.Frame>
      </Header>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
