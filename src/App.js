import React from 'react';
import Home from './pages/home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='App'>
        <Home />
      </div>
    </Router>
  );
}

export default App;
