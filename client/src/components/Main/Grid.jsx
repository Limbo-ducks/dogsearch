import React from 'react'
import { Link } from 'react-router-dom'
import './Grid.scss';
import Film from '../../assets/images/film.png'
import Theatre from '../../assets/images/theatre.png'
import Modeling from '../../assets/images/model.png'
import Tv from '../../assets/images/tv.png'



const Grid = () => {
  return (
    <section className="grid">
      <section className="grid__wrapper">
        <article className="grid__wrapper__item">
        <Link to="/search/films">
          <img src={Film} alt=""/>
          <h2>Film</h2>
        </Link>
        </article>
        <article className="grid__wrapper__item">
        <Link to="/search/theatre">
          <img src={Theatre} alt=""/>
          <h2>Theatre</h2>
        </Link>
        </article>
        <article className="grid__wrapper__item">
        <Link to="/search/tv">
          <img src={Tv} alt=""/>
          <h2>TV</h2>
        </Link>
        </article>
        <article className="grid__wrapper__item">
        <Link to="/search/modeling">          
          <img src={Modeling} alt=""/>
          <h2>Modeling</h2>
        </Link>
        </article>
      </section>
    </section>
  )
}

export default Grid;
