import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from '../About/About.js'
import Profile from '../Profile/Profile'
import Search from '../Search/Search'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'

function App () {
  const [openMenu, setOpenMenu] = React.useState(false);

  const burgerMenu = () => {
    {openMenu ? setOpenMenu(false) : setOpenMenu (true)}
  }

  return (
    <Router>
      <Header openMenu={openMenu} burgerMenu={burgerMenu}/>
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/about' exact component={About}/>
        <Route path='/profile' component={Profile} />
        <Route path='/search' component={Search} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
