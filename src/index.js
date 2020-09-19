import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import { GlobalStyles } from './globalStyles';
import App from './App';
import FirebaseContext from './context/firebase';

const config = {
  apiKey: 'AIzaSyCZ15FqmPA4JBY3tD9zlI5-phLCeFdCSM8',
  authDomain: 'netflix-clone-9a613.firebaseapp.com',
  databaseURL: 'https://netflix-clone-9a613.firebaseio.com',
  projectId: 'netflix-clone-9a613',
  storageBucket: 'netflix-clone-9a613.appspot.com',
  messagingSenderId: '735894876598',
  appId: '1:735894876598:web:48da1a8d0a22a4b9cbd117',
  measurementId: 'G-CCJ3L3CFFV'
};

const firebaseApp = firebase.intializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={firebaseApp}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
