import React from 'react'
import './Jumbotron.scss';
import Banner from '../../assets/images/banner.png'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';


const Jumbotron = () => {
  return (
    <section className="jumbotron">
      <img src={Banner} alt="" className="jumbotron__image"/>
      <h1 className="jumbotron__title">A Full Search Global Talent Database for the Entertainment Industry</h1>
      <article className="jumbotron__buttons">
        <Link to="/search">
          <button className="jumbotron__buttons__button jumbotron__buttons__button--talent"><p>Find Talent<SearchIcon className="searchicon"/></p></button>
        </Link>
        <Link to="/about">
          <button className="jumbotron__buttons__button jumbotron__buttons__button--learn">Learn More</button>
        </Link>
      </article>
    </section>
  )
}

export default Jumbotron;
