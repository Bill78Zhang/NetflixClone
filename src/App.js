import React from 'react';
import Home from './pages/home';
import SignIn from './pages/signin';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
