import React from 'react'
import { Link } from 'react-router-dom';
import LogoutButton from '../Header/LogoutButton';
import Buttons from '../Header/Buttons';

import './Nav.scss'

function Nav ({ authenticated, user }) {
  return (
    <nav className="header__nav">
      <ul className="header__nav__list">
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/search'>
          <li>Find Dog</li>
        </Link>
        {authenticated && <Link to='/about'>
          <li>About</li>
        </Link>}
      </ul>
      {user
          ? <LogoutButton />
          : <Buttons />}
    </nav>
  )
}

export default Nav
