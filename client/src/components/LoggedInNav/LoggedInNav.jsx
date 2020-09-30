import React from 'react'
import { Link } from 'react-router-dom'
import './LoggedInNav.scss'
import EmailIcon from '@material-ui/icons/Email';import DateRangeIcon from '@material-ui/icons/DateRange';
import NotificationsIcon from '@material-ui/icons/Notifications';import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SettingsIcon from '@material-ui/icons/Settings';
import ExampleImageOne from '../../assets/images/profile.jpg'

const LoggedInNav = () => {
  return (
    <section className="secondarynav">
        <Link to="/search">
          <article className="secondarynav__back"><h4><ArrowBackIcon/>Back to search</h4></article>
        </Link>
      <article className="secondarynav__profile">
        <article className="secondarynav__profile__link"><EmailIcon /><h5>Messages</h5></article>
        <article className="secondarynav__profile__link"><DateRangeIcon /><h5>Calendar</h5></article>
        <article className="secondarynav__profile__link"><NotificationsIcon /><h5>Notifications</h5></article>
        <Link to="/my-profile">
          <article className="secondarynav__profile__link"><SettingsIcon /><h5>Settings</h5></article>
        </Link>
        <Link to="/searchprofile/a">
          <img src={ExampleImageOne} alt="" className="secondarynav__profile__img"/>
        </Link>
      </article>
    </section>
  )
}

export default LoggedInNav;
