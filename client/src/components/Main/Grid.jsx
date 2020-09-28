import React from 'react'
import { Link } from 'react-router-dom'
import './Grid.scss';
import Golden from '../../assets/images/golden.jpg'
import Corgi from '../../assets/images/corgi.jpg'
import Pitbull from '../../assets/images/pitbull.jpg'
import Pug from '../../assets/images/pug.jpg'
import Daschund from '../../assets/images/daschund.jpg'
import Mixed from '../../assets/images/mixed.jpg'  

const Grid = () => {
  return (
    <section className="grid">
      <section className="grid__wrapper">
        <article className="grid__wrapper__item">
        <Link to="/search/films">
          <img src={Golden} alt=""/>
          <h2>Golden Retrievers</h2>
        </Link>
        </article>
        <article className="grid__wrapper__item">
        <Link to="/search/theatre">
          <img src={Corgi} alt=""/>
          <h2>Corgis</h2>
        </Link>
        </article>
        <article className="grid__wrapper__item">
        <Link to="/search/tv">
          <img src={Pitbull} alt=""/>
          <h2>Pitbulls</h2>
        </Link>
        </article>
        <article className="grid__wrapper__item">
        <Link to="/search/modeling">          
          <img src={Pug} alt=""/>
          <h2>Pugs</h2>
        </Link>
        </article>
        <article className="grid__wrapper__item">
        <Link to="/search/narrator">          
          <img src={Daschund} alt=""/>
          <h2>Daschounds</h2>
        </Link>
        </article>
        <article className="grid__wrapper__item">
        <Link to="/search/other">          
          <img src={Mixed} alt=""/>
          <h2>Mixed</h2>
        </Link>
        </article>
      </section>
    </section>
  )
}

export default Grid;
