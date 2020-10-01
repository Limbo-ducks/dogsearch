import React from 'react'
import './Jumbotron.scss';
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

import ImageOne from '../../assets/images/dogsone.jpg'
import ImageTwo from '../../assets/images/mixed.jpg'
import ImageThree from '../../assets/images/corgi.jpg'

const slideImages = [
  ImageOne,
  ImageTwo,
  ImageThree,
]

const Jumbotron = () => {
  return (
    <section className="jumbotron">
      <Slide easing="ease">
        <article className="each-slide">
          <article style={{'backgroundImage': `url(${slideImages[0]})`}}>
          </article>
        </article>
        <article className="each-slide">
          <article style={{'backgroundImage': `url(${slideImages[1]})`}}>
          </article>
        </article>
        <article className="each-slide">
          <article style={{'backgroundImage': `url(${slideImages[2]})`}}>
          </article>
        </article>
      </Slide>
      <h1 className="jumbotron__title">Find your goodest boy here!</h1>
      <article className="jumbotron__buttons">
        <Link to="/search">
          <button className="jumbotron__buttons__button jumbotron__buttons__button--dog"><h3>Find Dog<SearchIcon className="searchicon"/></h3></button>
        </Link>
        <Link to="/about">
          <button className="jumbotron__buttons__button jumbotron__buttons__button--learn">Learn More...</button>
        </Link>
      </article>
    </section>
  )
}

export default Jumbotron;
