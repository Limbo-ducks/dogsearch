import React from 'react'
import './DogAbout.scss'

const DogAbout = props => {
  return (
    <section className="about">
      <article className="about__header">
        <h2>About</h2>
      </article>
      <article className="about__content">
        <p>{props.data}</p>
      </article>
    </section>
  )
}

export default DogAbout;
