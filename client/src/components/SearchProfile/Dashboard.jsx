import React from 'react'
import './Dashboard.scss'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import RecentActorsOutlinedIcon from '@material-ui/icons/RecentActorsOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const Dashboard = ({ viewProjects }) => {

  return (
      <section className="dashboard">
        {/* <article className="dashboard__search">
          <input type="text"/>
          <button className="dashboard__search__button">Quick Search <SearchOutlinedIcon /> </button> 
        </article> */}
        <button className="dashboard__button">
          <h4 className="dashboard__button__text">My Network</h4>
          <article className="dashboard__button__icon">
            <PeopleAltOutlinedIcon />
          </article>
        </button>
        <button className="dashboard__button" onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            viewProjects(e.currentTarget)
            }}>
          <h4 className="dashboard__button__text">My Projects</h4>
          <article className="dashboard__button__icon">
            <FileCopyOutlinedIcon />
          </article>
        </button>
        <button className="dashboard__button">
          <h4 className="dashboard__button__text">Recent Talents</h4>
          <article className="dashboard__button__icon">
            <RecentActorsOutlinedIcon />
          </article>
        </button>
        <button className="dashboard__button">
          <h4 className="dashboard__button__text">My messages</h4>
          <article className="dashboard__button__icon">
            <SettingsOutlinedIcon />
          </article>
        </button>
        <button className="dashboard__button">
          <h4 className="dashboard__button__text">My calendar</h4>
          <article className="dashboard__button__icon">
            <SettingsOutlinedIcon />
          </article>
        </button>
        <button className="dashboard__button">
          <h4 className="dashboard__button__text">Profile Settings</h4>
          <article className="dashboard__button__icon">
            <SettingsOutlinedIcon />
          </article>
        </button>
      </section>
  )
}

export default Dashboard;
