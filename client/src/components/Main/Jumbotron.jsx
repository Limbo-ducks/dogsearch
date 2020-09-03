import React from 'react'
import './Jumbotron.scss';
import Banner from '../../assets/images/banner.png'

const Jumbotron = () => {
  return (
    <section className="jumbotron">
      <img src={Banner} alt="" className="jumbotron__image"/>
      <h1 className="jumbotron__title">A Full Search Global Talent Database for the Entertainment Industry</h1>
      <article className="jumbotron__buttons">
        <button className="jumbotron__buttons__button jumbotron__buttons__button--talent">Find Talent</button>
        <button className="jumbotron__buttons__button jumbotron__buttons__button--learn">Learn More</button>
      </article>
    </section>
  )
}

export default Jumbotron;
