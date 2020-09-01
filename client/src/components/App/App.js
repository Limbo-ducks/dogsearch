import React from 'react';
import './App.css';
import Nav from '../Nav/Nav.js'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import About from '../About/About.js';
import Profile from '../Profile/Profile';

function App() {
  return (
    <Router>
      <Nav authenticated={true} />
      <Switch>
        <Route path='/about' exact component={About}/>
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
