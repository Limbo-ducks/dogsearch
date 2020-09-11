import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss';
import Icon from '../../assets/images/Icon.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__icon">
        <img src={Icon} alt=""/>
      </section>
      <section className="footer__wrapper">
        <article className="footer__wrapper__list">
          <ul>
            <h4>Talent</h4>
            <Link to='/'>
              <li>How it works</li>
            </Link>
            <Link to='/'>
              <li>Talent Database</li>
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
              <li>Find talents</li>
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
        <h4 className="footer__info__text">© 2020 Talentwyre. All rights reserved</h4>
        <article className="footer__info__links">
          <Link to='/'>
            <h4 className="footer__info__links__link">/ Privacy Policy </h4>
          </Link>
          <Link to='/'>
            <h4 className="footer__info__links__link"> / Terms of use</h4>
          </Link>
        </article>
      </section>
    </footer>
  )
}

export default Footer;
