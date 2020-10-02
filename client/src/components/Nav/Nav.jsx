import React from 'react'
import { Link } from 'react-router-dom';
import LogoutButton from '../Header/LogoutButton';
import Buttons from '../Header/Buttons';

import './Nav.scss'

const Nav = ({ authenticated, user, setOpenMenu }) => {

  const onClick = () => {
    if (document.documentElement.clientWidth < 821) {
      setOpenMenu(true)
    }
  }
  
  return (
    <nav className="header__nav">
            {user
          ? <LogoutButton onClick={onClick}/>
          : <Buttons onClick={onClick}/>}
      <ul className="header__nav__list">
        <Link to='/' onClick={onClick}>
          <li>Home</li>
        </Link>
        <Link to='/search' onClick={onClick}>
          <li>Find Dog</li>
        </Link>
        <Link to='/about' onClick={onClick}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
