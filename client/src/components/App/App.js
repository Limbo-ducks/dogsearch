import React from 'react'
import './App.scss'
import Nav from '../Nav/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from '../About/About.js'
import Profile from '../Profile/Profile'
import Search from '../Search/Search'

function App () {
  return (
    <>
    <Router>
      <Nav authenticated={true}/>
      <li>joe</li>
      <Switch>
        <Route path='/about' exact component={About}/>
        <Route path='/profile' component={Profile} />
        <Route path='/search' component={Search} />
      </Switch>
    </Router>
    </>
  )
}

export default App
