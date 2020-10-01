import React from 'react'
import './Projects.scss'

import DateRangeIcon from '@material-ui/icons/DateRange';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import FiberNewIcon from '@material-ui/icons/FiberNew';


const Projects = ({ viewProjects }) => {

  return (
    <section className="contentmodal">
      <article onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            viewProjects(e.currentTarget)
            }} className="contentmodal__exit"><CancelOutlinedIcon/>
      </article>
      <h2 className="contentmodal__title">All projects</h2>
      <article className="projects">
        <article className="projects__row projects__row--title">
          <article className="projects__column"><h4>Example</h4></article>
          <article className="projects__column projects__column--centered"><h4>Alerts</h4></article>
          <article className="projects__column projects__column--centered"><h4>Calendar</h4></article>
          <article className="projects__column projects__column--centered"><h4>Favourites</h4></article>
          <article className="projects__column projects__column--centered"><h4>Stuff</h4></article>
          <article className="projects__column projects__column--centered"><h4>Three</h4></article>
        </article>
        <article className="projects__row">
          <article className="projects__column"><h4>Project Title</h4></article>
          <article className="projects__column projects__column--centered"><NotificationsActiveIcon/></article>
          <article className="projects__column projects__column--centered"><DateRangeIcon/></article>
          <article className="projects__column projects__column--centered"><BookmarksOutlinedIcon/><FiberNewIcon/></article>
          <article className="projects__column projects__column--centered">Stuff</article>
          <article className="projects__column projects__column--centered">Three</article>
        </article>
        <article className="projects__row">
          <article className="projects__column"><h4>Project Title</h4></article>
          <article className="projects__column projects__column--centered"><NotificationsNoneIcon/></article>
          <article className="projects__column projects__column--centered"><DateRangeIcon/></article>
          <article className="projects__column projects__column--centered"><BookmarksOutlinedIcon/></article>
          <article className="projects__column projects__column--centered">Stuff</article>
          <article className="projects__column projects__column--centered">Three</article>
        </article>
        <article className="projects__row">
          <article className="projects__column"><h4>Project Title</h4></article>
          <article className="projects__column projects__column--centered"><NotificationsNoneIcon/></article>
          <article className="projects__column projects__column--centered"><DateRangeIcon/></article>
          <article className="projects__column projects__column--centered"><BookmarksOutlinedIcon/></article>
          <article className="projects__column projects__column--centered">Stuff</article>
          <article className="projects__column projects__column--centered">Three</article>
        </article>
      </article>
      <article>

      </article>
    </section>
  )
}

export default Projects;
