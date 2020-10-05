import React from 'react'
import './ProfileContent.scss'
import Dashboard from './Dashboard';
import ExampleImageOne from '../../assets/images/profile.jpg'

const ProfileContent = ({ viewProjects, viewFavourites, viewCalendar, viewMessages }) => {

  return (
    <section className="content">
      <article className="content__navigation">
        <Dashboard 
          viewProjects={viewProjects} 
          viewFavourites={viewFavourites} 
          viewCalendar={viewCalendar} 
          viewMessages={viewMessages} />
      </article>
      <h3 className="content__title">Posts</h3>
      <article className="post">
      <article className="post__header">
        <article className="post__header__text">
          <h3 className="post__header__text__title">A post example</h3> 
          <h5 className="post__header__text__posted">Posted at 14:00 by Jane Doe</h5>
        </article>
      </article>
      <article className="post__content">
        <img src={ExampleImageOne} alt="" className="post__header__img"/>
        <p className="post__content__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates eius provident ipsum assumenda enim quaerat culpa recusandae vitae? Similique doloremque provident, excepturi animi a accusantium facere temporibus est id cumque?</p>
      </article>
    </article>
    </section>
  )
}

export default ProfileContent;
