import React from 'react'
import './ProfileInfo.scss'
import Image from '../../assets/images/banner.png'
import ExampleImageOne from '../../assets/images/1.jpg'

const ProfileInfo = () => {
  return (
    <section className="info">
      <article className="info__header">
        <img src={Image} alt="" className="info__header__banner"/>
        <img src={ExampleImageOne} alt="" className="info__header__profileimg"/>
      </article>
      <article className="info__navigation">
        <article>Icon</article>
        <article>Icon</article>
      </article>
      <article className="info__content">
        <h2 className="info__content__text">Model, stuntman</h2>
        <h3 className="info__content__text">Stockholm, Sweden</h3>
        <article className="info__content__attributes">
          <h3 className="info__content__text">Height: </h3>
          <h3 className="info__content__text">Eyes:</h3>
          <h3 className="info__content__text">Acting age:</h3>
        </article>
        <h3 className="info__content__text info__content__text--representation">Representation AB</h3>
      </article>
      <article className="info__footer">

      </article>
    </section>
  )
}

export default ProfileInfo;
