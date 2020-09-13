import React from 'react';
import Home from './pages/home';
import SignIn from './pages/signin';
import Browse from './pages/browse';
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
        <Route path='/browse'>
          <Browse />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
