import React from 'react'
import './Messages.scss'
import ExampleImageOne from '../../assets/images/1.jpg'
import { Tooltip } from '@material-ui/core';

import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import RecentActorsOutlinedIcon from '@material-ui/icons/RecentActorsOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import FiberNewIcon from '@material-ui/icons/FiberNew';


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
            <li className="messages__people__list__item">
              <img src={ExampleImageOne} alt=""/>
              <h3>Name</h3>
            </li>
            <li className="messages__people__list__item">
              <img src={ExampleImageOne} alt=""/>
              <h3>Name</h3>
            </li>
            <li className="messages__people__list__item">
              <img src={ExampleImageOne} alt=""/>
              <h3>Name</h3>
            </li>
            <li className="messages__people__list__item">
              <img src={ExampleImageOne} alt=""/>
              <h3>Name</h3>
            </li>
          </ul>
        </section>
        <section className="messages__chat">
          <section className="messages__chat__messages">
            <article className="messages__chat__messages__header">
              <h3>Message to x</h3>
            </article>
            <article className="messages__chat__messages__message">
              <h2>Hello x, how are you?</h2>
            </article>
            <article className="messages__chat__messages__message messages__chat__messages__message--response">
              <h2>Hello, I am good, how are you?</h2>
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
