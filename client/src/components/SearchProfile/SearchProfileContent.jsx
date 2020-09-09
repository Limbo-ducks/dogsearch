import React from 'react'
import './SearchProfileContent.scss'
import Dashboard from './Dashboard';
import ExampleImageOne from '../../assets/images/1.jpg'


const SearchProfileContent = ({viewProjects}) => {

  return (
    <section className="content">
      <article className="content__navigation">
        <Dashboard viewProjects={viewProjects}/>
      </article>
      <h3 className="content__title">News</h3>
      <article className="post">
      <article className="post__header">
        <article className="post__header__text">
          <h4 className="post__header__text__title">A post example</h4> 
          <h5 className="post__header__text__posted">Posted at 14:00 by Jane Doe</h5>
        </article>
        <img src={ExampleImageOne} alt="" className="post__header__img"/>
      </article>
      <article className="post__content">
        <p className="post__content__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates eius provident ipsum assumenda enim quaerat culpa recusandae vitae? Similique doloremque provident, excepturi animi a accusantium facere temporibus est id cumque?</p>
      </article>
    </article>
    </section>
  )
}

export default SearchProfileContent;
