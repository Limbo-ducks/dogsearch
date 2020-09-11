import React from 'react'
import './Messages.scss'
import BlankImage from '../../assets/images/blank-profile-picture.png'
import { Tooltip } from '@material-ui/core';

import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';



const Projects = ({ viewMessages }) => {

  return (
    <section className="contentmodal contentmodal--messages">
      <article onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            viewMessages(e.currentTarget)
            }} className="contentmodal__exit"><CancelOutlinedIcon/>
      </article>
      <h2 className="contentmodal__title">My messages</h2>
      <section className="messages">
        <section className="messages__people">
          <ul className="messages__people__list">
            <li className="messages__people__list__item messages__people__list__item--active">
              <img src={BlankImage} alt=""/>
              <h3>Jane Doe</h3>
            </li>
            <li className="messages__people__list__item">
              <img src={BlankImage} alt=""/>
              <h3>Name</h3>
            </li>
            <li className="messages__people__list__item">
              <img src={BlankImage} alt=""/>
              <h3>Name</h3>
            </li>
            <li className="messages__people__list__item">
              <img src={BlankImage} alt=""/>
              <h3>Name</h3>
            </li>
          </ul>
        </section>
        <section className="messages__chat">
          <section className="messages__chat__messages">
            <article className="messages__chat__messages__header">
              <h3>Message to Jane Doe</h3>
            </article>
            <article className="messages__chat__messages__message">
              <h2>Hello Jane, how are you? </h2>
            </article>
            <article className="messages__chat__messages__message messages__chat__messages__message--response">
              <h2>Hello John, I am good, how are you?</h2>
            </article>
          </section>
          <section className="messages__chat__input">
            <input type="text"/>
            <button className="send__button">Send</button>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Projects;
