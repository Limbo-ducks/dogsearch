import React, { useState, useEffect } from 'react'
import './App.scss'
import Header from '../Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from '../About/About.jsx'
import Login from '../Login/Login'
import Main from '../Main/Main'
import DogProfile from '../DogProfile/DogProfile'
import Profile from '../Profile/Profile'
import Search from '../Search/Search'
import Signup from '../Signup/Signup'
import Settings from '../Settings/Settings'

function App () {
  const [hits, setHits] = useState([])
  const [openMenu, setOpenMenu] = useState(false)
  const [user, setUser] = useState('')
  const [status, setStatus] = useState('loading')
  
  const burgerMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true)
  }

  useEffect(() => {
    fetch('/api/users/me')
      .then(res => res.json())
      .then(({ id }) => setUser(id))
      .catch(console.error)
      .finally(() => setStatus('idle'))
      
    window.addEventListener("resize", function(){
      if (document.documentElement.clientWidth > 821) {
        setOpenMenu(false)
      }
      else {
        setOpenMenu(true)
      }
    }, true);
  }, [])

  React.useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Router>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} burgerMenu={burgerMenu} user={user} />
      {status === 'loading'
        ? <div>Loading...</div>
        : <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/about' exact component={About}/>
          <Route path='/dog/:id' render={props => <DogProfile {...props} user={user} />} />
          <Route path='/search/:breed?'
            render={props => <Search
              {...props}
              user={user}
              hits={hits}
              setHits={setHits}
              />}
              />
          <Route path='/profile/:id' component={Profile} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/my-profile' render={props => <Settings {...props} user={user} />} />
        </Switch>}
    </Router>
  )
}

export default App
