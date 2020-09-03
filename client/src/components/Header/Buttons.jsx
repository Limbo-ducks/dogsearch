import React from 'react'
import './Buttons.scss'

const Buttons = () => {
  return (
    <section className="header__buttons">
      <button className="header__buttons__button header__buttons__button--signup">sign-up</button>
      <button className="header__buttons__button header__buttons__button--login">Log in</button>
    </section>
  )
}

export default Buttons
