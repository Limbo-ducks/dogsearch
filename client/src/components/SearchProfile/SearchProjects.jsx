import React from 'react'
import './SearchProjects.scss'
import DateRangeIcon from '@material-ui/icons/DateRange';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import { Tooltip } from '@material-ui/core';


const SearchProjects = ({ viewSingleProject, viewShortlist }) => {
  return (
    <section className="about">
      <article className="about__header">
        <h2>Projects</h2>
      </article>
      <article className="about__content">
        <ul>
          <li>
            <article className="about__content__project" onClick={(e) => {
            e.preventDefault();
            viewSingleProject(e.currentTarget)
            }}>
              <Tooltip title="View Project" placement="top"><h3>Project one</h3></Tooltip>
              <article className="about__content__project__icons">
                <Tooltip title="View Project notifications" placement="top"><NotificationsNoneIcon /></Tooltip>
                <Tooltip title="View Project Shortlist" placement="top"><BookmarksOutlinedIcon onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  viewShortlist(e.currentTarget)
                  }}/></Tooltip> 
                <Tooltip title="View Project Calendar" placement="top"><DateRangeIcon /></Tooltip>
                <Tooltip title="View Project Messages" placement="top"><MailOutlineIcon /></Tooltip>
              </article>
            </article>
          </li>
          <li>
            <article className="about__content__project">
              <h3>Project</h3>
              <article className="about__content__project__icons"><NotificationsNoneIcon /><BookmarksOutlinedIcon /><DateRangeIcon /><MailOutlineIcon /></article>
            </article>
          </li>
          <li>
            <article className="about__content__project">
              <h3>Project</h3>
              <article className="about__content__project__icons"><NotificationsNoneIcon /><BookmarksOutlinedIcon /><DateRangeIcon /><MailOutlineIcon /></article>
            </article>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default SearchProjects;
