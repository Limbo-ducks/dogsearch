import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './SingleProject.scss'
import ProfileFavourites from './ProfileFavourites';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

const SingleProject = ({viewFavourites}) => {

  return (
    <section className="content">
      <h3 className="content__title">Project Title</h3>
      <span id="description" className="spanscroll"></span>
      <h3 className="content__title">Project Description</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt veniam quas sit perspiciatis delectus enim cumque magni, sint at reiciendis modi amet. Quo illum dolores ipsa placeat vero distinctio iusto.</p>
      <span id="calendar" className="spanscroll"></span>
      <h3 className="content__title">Project Calendar</h3>
      <Calendar />
      <span id="favourites" className="spanscroll"></span>
      <h3 className="content__title">Favourites</h3>
      <ProfileFavourites />
      <article className="content__link" onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  viewFavourites(e.currentTarget)
                  }}>
        <h4 className="content__link__text">View full favouritelist</h4>
        <ArrowForwardIosOutlinedIcon/>
      </article>
      <span id="news" className="spanscroll"></span>
      <h3 className="content__title">News</h3>
    </section>
  )
}

export default SingleProject;
