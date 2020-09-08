import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from '../About/About.js'
import Profile from '../Profile/Profile.jsx'
import Talent from '../Talents/Talent'
import Search from '../Search/Search'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'
import Login from '../Login/Login.jsx'
import Signup from '../Signup/Signup.jsx'

function App () {
  const [openMenu, setOpenMenu] = React.useState(false)

  const burgerMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true)
  }

  React.useEffect(() => {
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
        <Route path='/search/:credit?' component={Search} />
        <Route path='/talents/:id' exact component={Talent} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
