import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import FirebaseContext from '../context/firebase';
import { Form } from '../components';

export default function SignUp() {
  const [error, setError] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const isValid = password === '' || emailAddress === '' || firstName === '';

  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const handleSignUp = event => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(result => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1
          })
          .then(() => {
            setEmailAddress('');
            setPassword('');
            setError('');
            history.push('/browse');
          });
      })
      .catch(error => setError(error.message));
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method='POST'>
            <Form.Input
              placeholder='First Name'
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type='password'
              value={password}
              autoComplete='off'
              placeholder='Password'
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isValid} type='submit'>
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already have an accountant?{' '}
              <Form.Link to='/signin'>Sign in now.</Form.Link>
            </Form.Text>
            <Form.SmallText>
              This page is protected by Google reCAPTCHA.
            </Form.SmallText>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
