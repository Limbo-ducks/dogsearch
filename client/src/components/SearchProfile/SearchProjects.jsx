import React from 'react'
import './SearchProjects.scss'
import DateRangeIcon from '@material-ui/icons/DateRange';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';

const SearchProjects = ({ viewSingleProject }) => {
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
              <h3>Project</h3>
              <article className="about__content__project__icons"><NotificationsNoneIcon /><BookmarksOutlinedIcon /> <DateRangeIcon /><MailOutlineIcon /></article>
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
