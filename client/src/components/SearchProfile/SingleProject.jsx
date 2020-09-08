import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './SingleProject.scss'
import ProfileShortList from './ProfileShortList';


const SingleProject = () => {

  return (
    <section className="content">
      <h3 className="content__title">Project Title</h3>
      <span id="description" className="spanscroll"></span>
      <h3 className="content__title">Project Description</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt veniam quas sit perspiciatis delectus enim cumque magni, sint at reiciendis modi amet. Quo illum dolores ipsa placeat vero distinctio iusto.</p>
      <span id="calendar" className="spanscroll"></span>
      <h3 className="content__title">Project Calendar</h3>
      <Calendar />
      <span id="shortlist" className="spanscroll"></span>
      <h3 className="content__title">Shortlist</h3>
      <ProfileShortList />
      <span id="news" className="spanscroll"></span>
      <h3 className="content__title">News</h3>
    </section>
  )
}

export default SingleProject;
