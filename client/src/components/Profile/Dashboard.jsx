import React from 'react'
import './Dashboard.scss'
import SettingsIcon from '@material-ui/icons/Settings';import CreateIcon from '@material-ui/icons/Create';
import PetsIcon from '@material-ui/icons/Pets';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleIcon from '@material-ui/icons/People';

const Dashboard = ({ viewProjects, viewFavourites, viewCalendar, viewMessages }) => {

  return (
      <section className="dashboard">
        <button className="dashboard__button">
          <h5 className="dashboard__button__text">Create a post</h5>
          <article className="dashboard__button__icon">
            <CreateIcon />
          </article>
        </button>
        <button className="dashboard__button" onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            viewFavourites(e.currentTarget)
            }}>
          <h5 className="dashboard__button__text">My Favorites</h5>
          <article className="dashboard__button__icon">
            <PetsIcon />
          </article>
        </button>
        <button className="dashboard__button">
          <h5 className="dashboard__button__text">My network</h5>
          <article className="dashboard__button__icon">
            <PeopleIcon />
          </article>
        </button>
        <button className="dashboard__button" onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            viewMessages(e.currentTarget)
            }}>
          <h5 className="dashboard__button__text">My messages</h5>
          <article className="dashboard__button__icon">
            <EmailIcon />
          </article>
        </button>
        <button className="dashboard__button">
          <h5 className="dashboard__button__text">My calendar</h5>
          <article className="dashboard__button__icon">
            <DateRangeIcon />
          </article>
        </button>
        <button className="dashboard__button">
          <h5 className="dashboard__button__text">Profile Settings</h5>
          <article className="dashboard__button__icon">
            <SettingsIcon />
          </article>
        </button>
      </section>
  )
}

export default Dashboard;
