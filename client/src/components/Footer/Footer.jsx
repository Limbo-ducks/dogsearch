import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PetsIcon from '@material-ui/icons/Pets';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__icon">
        <PetsIcon />
      </section>
      <section className="footer__wrapper">
        <article className="footer__wrapper__list">
          <ul>
            <h4>Dogs</h4>
            <Link to='/'>
              <li>How it works</li>
            </Link>
            <Link to='/'>
              <li>Dog Database</li>
            </Link>
          </ul>
        </article>
        <article className="footer__wrapper__list">
          <ul>
            <h4>Management</h4>
            <Link to='/'>
              <li>How it works</li>
            </Link>
            <Link to='/'>
              <li>Find dogs</li>
            </Link>
            <Link to='/'>
              <li>Premium</li>
            </Link>
          </ul>
        </article>
        <article className="footer__wrapper__list">
          <ul>
            <h4>Company</h4>
            <Link to='/'>
              <li>About</li>
            </Link>
            <Link to='/'>
              <li>The team</li>
            </Link>
            <Link to='/'>
              <li>Career</li>
            </Link>
            <Link to='/'>
              <li>Press</li>
            </Link>
          </ul>
        </article>
        <article className="footer__wrapper__list">
          <ul>
            <h4>Support</h4>
            <Link to='/'>
              <li>Contact</li>
            </Link>
            <Link to='/'>
              <li>Help</li>
            </Link>
            <Link to='/'>
              <li>Pricing</li>
            </Link>
          </ul>
        </article>
        <article className="footer__wrapper__list">
          <ul>
            <h4>Connect</h4>
            <Link to='/'>
              <li>Facebook</li>
            </Link>
            <Link to='/'>
              <li>LinkedIn</li>
            </Link>
            <Link to='/'>
              <li>Twitter</li>
            </Link>
          </ul>
        </article>
      </section>
      <span className="footer__divider"></span>
      <section className="footer__info">
        <h4 className="footer__info__text">© 2020 LIMBO DUCKS. All rights reserved</h4>
        <ul className="footer__info__links">
          <li>
            <Link to='/'>
              <h5 className="footer__info__links__link">Privacy Policy</h5>
            </Link>
          </li>
          <li><FiberManualRecordIcon/></li>
          <li>
            <Link to='/'>
              <h5 className="footer__info__links__link">Terms of use</h5>
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer;
