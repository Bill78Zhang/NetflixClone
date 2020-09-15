import React, { useState,UseContext } from 'react';
import { FooterContainer } from '../containers/footer';
import { SelectProfileContainer } from '../containers/profile';
import { Header } from '../components';


export function BrowseContainer() {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchItem,setSearchItem] = useState('');

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
            <Header.NewLink
              active={category === 'series' ? 'true' : "false"}
              onClick={() => setCategory('series')}>
              Series
            </Header.NewLink>
            <Header.NewLink
              active={category === 'films' ? 'true' : "false"}
              onClick={() => setCategory('films')}>
              Films
            </Header.NewLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchItem={searchItem} setSearchItem={setSearchItem} />
            <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.Link>{user.displayName}</Header.Link>
                                </Header.Group>
                                <Header.Group>
                                    <Header.Link onClick={() => firebase.auth().signOut()}>
                                        Sign out</Header.Link>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
                
      </Header>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
