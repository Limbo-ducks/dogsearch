import React from 'react'
import './SingleProjectNav.scss'

const SingleProjectNav = () => {
  return (
    <section className="profilenav">
      <a href="#calendar"><h3 className="profilenav__link">Calendar</h3></a>
      /
      <a href="#description"><h3 className="profilenav__link">Description</h3></a>
      /
      <a href="#shortlist"><h3 className="profilenav__link">Shortlist</h3></a>
      /
      <a href="#news"><h3 className="profilenav__link">News</h3></a>
      /
      <a href="#people"><h3 className="profilenav__link">People</h3></a>
    </section>
  )
}

export default SingleProjectNav;
