import React, {useState} from 'react';
import Nav from '../Nav/Nav';
import Buttons from './Buttons';
import Logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom'
import './Header.scss';
import LogoutButton from './LogoutButton';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ burgerMenu, openMenu, user }) => {
  return (
    <header className="header">
        <Link to='/'>
          <img src={Logo} alt="Talentwyre logo" className="header__logo"/>
        </Link>
        {!openMenu ? <Nav authenticated={true}/> : null}
        {user
          ? <LogoutButton />
          : <Buttons />}
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
