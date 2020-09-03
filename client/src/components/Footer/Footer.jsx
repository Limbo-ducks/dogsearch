import React from 'react'
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__wrapper">
        <article className="footer__wrapper__list">
          <ul>
            <h4>Talent</h4>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </article>
        <article className="footer__wrapper__list">
          <ul>
            <h4>Management</h4>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </article>
        <article className="footer__wrapper__list">
          <ul>
            <h4>Company</h4>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </article>
        <article className="footer__wrapper__list">
          <ul>
            <h4>Support</h4>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </article>
        <article className="footer__wrapper__list">
          <ul>
            <h4>Connect</h4>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </article>
      </section>
      <span className="footer__divider"></span>
      <section className="footer__info">
        <h4 className="footer__info__text">Copyright</h4>
        <h4 className="footer__info__text">Privacy policy</h4>
      </section>
    </footer>
  )
}

export default Footer;
