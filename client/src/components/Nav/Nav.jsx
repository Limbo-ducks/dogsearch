import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

function Nav ({ authenticated}) {
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
    </nav>
  )
}

export default Nav
