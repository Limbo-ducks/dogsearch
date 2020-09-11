import React from 'react'
import './Buttons.scss'

const AuthenticatedButtons = () => {
  return (
    <section className="header__buttons">
      <a href='/my-profile'
        className="header__buttons__button header__buttons__button--login"
      >
        My Profile
      </a>
      <a href='/api/auth/logout'
        className="header__buttons__button header__buttons__button--signup"
      >
        Log out
      </a>
    </section>
  )
}

export default AuthenticatedButtons
