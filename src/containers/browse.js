import React, { useState, useContext, useEffect } from 'react';
import { FooterContainer } from '../containers/footer';
import { SelectProfileContainer } from '../containers/profile';
import { Loading, Card } from '../components';
import { Header } from '../components';
import { Player } from '../components';
import Fuse from 'fuse.js';

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const user = {
    displayName: 'Karal',
    photoURL: 1
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [user]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ['data.description', 'data.title', 'data.genre']
    });

    const results = fuse.search(searchItem).map(({ item }) => item);

    if (slideRows.length > 0 && searchItem.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchItem]);
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src='joker1' dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to='/home' src='/images/misc/logo.svg' alt='Netflix' />
            <Header.NewLink
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}>
              Series
            </Header.NewLink>
            <Header.NewLink
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}>
              Films
            </Header.NewLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchItem={searchItem}
              setSearchItem={setSearchItem}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.NewLink>{user.displayName}</Header.NewLink>
                </Header.Group>
                <Header.Group>
                  <Header.NewLink>Sign out</Header.NewLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <Card.Group>
        {slideRows.map(slideItem => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map(item => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Video />
                <Player.Button />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
