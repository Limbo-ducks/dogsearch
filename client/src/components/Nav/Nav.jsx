import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../assets/images/talentwyre-icon-gold.png'
import './Nav.scss'

function Nav ({ authenticated }) {
  return (
    <nav className="header__nav">
      <ul className="header__nav__list">
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/search'>
          <li>Find Talent</li>
        </Link>
          <img src={Icon} alt=""/>
        <Link to='/search'>
          <li>Latest News</li>
        </Link>
        {authenticated && <Link to='/profile'>
          <li>Profile</li>
        </Link>}
      </ul>
    </nav>
  )
}

export default Nav
