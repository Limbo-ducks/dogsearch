import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

function Nav ({ authenticated }) {
  return (
    <nav>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/search'>
          <li>Search</li>
        </Link>
        {authenticated && <Link to='/profile'>
          <li>Profile</li>
        </Link>}
      </ul>
    </nav>
  )
}

export default Nav
