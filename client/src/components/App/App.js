import React, { useState, useEffect } from 'react'
import './App.scss'
import Header from '../Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from '../About/About.js'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Main from '../Main/Main'
import Profile from '../Profile/Profile'
import SearchProfile from '../SearchProfile/SearchProfile'
import Search from '../Search/Search'
import Signup from '../Signup/Signup'
import Talent from '../Talents/Talent'
import UserProfile from '../UserProfile/UserProfile'

function App () {
  const [openMenu, setOpenMenu] = useState(false)
  const [user, setUser] = useState('')

  const burgerMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true)
  }

  useEffect(() => {
    fetch('/api/users/whoami')
      .then(res => res.json())
      .then(({ id }) => setUser(id))
      .catch(console.error)
      
    window.addEventListener("resize", function(){
      if (document.documentElement.clientWidth > 821) {
        setOpenMenu(false)
      }
      else {
        setOpenMenu(true)
      }
    }, true);
  }, [])

  return (
    <Router>
      <Header openMenu={openMenu} burgerMenu={burgerMenu}/>
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/about' exact component={About}/>
        <Route path='/profile/:id' component={Profile} />
        <Route path='/searchprofile' component={SearchProfile} />
        <Route path='/search/:credit?' component={Search} />
        <Route path='/talents/:id' exact component={Talent} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/my-profile' render={props => <UserProfile {...props} user={user} />} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
