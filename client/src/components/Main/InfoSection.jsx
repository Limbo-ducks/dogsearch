import React from 'react';
import './InfoSection.scss';
import { Link } from 'react-router-dom'
import { Arrows } from '../../Icons'

const InfoSection = () => {
  return (
    <section className="section">     
      <article className="section__wrapper">
        <h2>A modern way of finding the best dog for you, whether you need a friend for life or a new addition to your family.</h2>
        <section className="section__wrapper__signup">
          <Link to='/signup'>
            <h3>Sign up</h3>
          </Link>
          <Arrows />
        </section>
      </article>
    </section>
  )
}

export default InfoSection;
