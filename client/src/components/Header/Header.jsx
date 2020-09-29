import React, {useState} from 'react';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom'
import './Header.scss';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ burgerMenu, openMenu, user }) => {
  return (
    <header className="header">
      <article className="header__logo">
        <Link to='/'>
          <h1>Dog Search</h1>
        </Link>
      </article>
        {!openMenu ? <Nav authenticated={true} user={user}/> : null}

        <section className="header__burger">
        <a onClick={(e) => {
            e.preventDefault();
            burgerMenu(e.currentTarget)
            }} className="main__section__menu">
          {!openMenu ? <h2><CloseIcon/></h2> : <h2><MenuIcon/></h2>}
        </a>
        </section>
    </header>
  )
}

export default Header;
