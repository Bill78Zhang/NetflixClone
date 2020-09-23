import React from 'react';
import Home from './pages/home';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Browse from './pages/browse';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import useAuthListener from './hooks/use-auth-listener';
import { IsRedirectUser, ProtectedRoute } from './helpers/routes';

function App() {
  const { user } = useAuthListener();
  console.log(user);
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <IsRedirectUser path='/signin' user={user} redirectPath='/browse'>
          <SignIn />
        </IsRedirectUser>
        <IsRedirectUser path='/signup' user={user} redirectPath='/browse'>
          <SignUp />
        </IsRedirectUser>
        <Route path='/browse' use={user}>
          <Browse />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
