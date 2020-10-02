import React from 'react'
import { Link } from 'react-router-dom'
import './Buttons.scss'

const Buttons = ({ onClick }) => {
  return (
    <section className="header__buttons">
      <Link to='/signup' onClick={onClick}
>
        <button 
          className="header__buttons__button header__buttons__button--signup"
          >
            sign up</button>
      </Link>
      <Link to='/login' onClick={onClick}
>
        <button 
          className="header__buttons__button header__buttons__button--login">
            Log in</button>
      </Link>
    </section>
  )
}

export default Buttons
