import React from 'react'
import './Buttons.scss'

const LogoutButton = () => {
  return (
    <section className="header__buttons">
      <a href='/api/auth/logout'
        className="header__buttons__button header__buttons__button--signup"
      >
        Log out
      </a>
    </section>
  )
}

export default LogoutButton
