import React from 'react'
import './Messages.scss'
import BlankImage from '../../assets/images/blank-profile-picture.png'

import CancelIcon from '@material-ui/icons/Cancel';

const Projects = ({ viewMessages }) => {

  return (
    <section className="contentmodal contentmodal--messages">
      <article onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            viewMessages(e.currentTarget)
            }} className="contentmodal__exit"><CancelIcon/>
      </article>
      <h3 className="contentmodal__title">My messages</h3>
      <section className="messages">
        <section className="messages__people">
          <ul className="messages__people__list">
            <li className="messages__people__list__item messages__people__list__item--active">
              <img src={BlankImage} alt=""/>
              <h5>Jane Doe</h5>
            </li>
            <li className="messages__people__list__item">
              <img src={BlankImage} alt=""/>
              <h5>Name</h5>
            </li>
            <li className="messages__people__list__item">
              <img src={BlankImage} alt=""/>
              <h5>Name</h5>
            </li>
            <li className="messages__people__list__item">
              <img src={BlankImage} alt=""/>
              <h5>Name</h5>
            </li>
            <li className="messages__people__list__item">
              <img src={BlankImage} alt=""/>
              <h5>Name</h5>
            </li>
          </ul>
        </section>
        <section className="messages__chat">
          <section className="messages__chat__messages">
            <article className="messages__chat__messages__header">
              <h4>Message to Jane Doe</h4>
            </article>
            <article className="messages__chat__messages__message">
              <path>Hello Jane, how are you? </path>
            </article>
            <article className="messages__chat__messages__message messages__chat__messages__message--response">
              <p>Hello John, I am good, how are you?</p>
            </article>
          </section>
          <section className="messages__chat__input">
            <textarea/>
            <button className="send__button">Send</button>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Projects;
