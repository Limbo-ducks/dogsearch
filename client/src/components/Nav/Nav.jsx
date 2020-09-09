import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../assets/images/talentwyre-icon-gold.png'
import './Nav.scss'

function Nav ({ authenticated}) {
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

        <a href="http://talentwyre.com/" target="_blank">
          <li>Latest News</li>
        </a>

        {authenticated && <Link to='/about'>
          <li>About</li>
        </Link>}
      </ul>
    </nav>
  )
}

export default Nav
