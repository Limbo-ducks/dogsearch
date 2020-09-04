import React from 'react'
import './ProfileContent.scss'
import ProfileNews from './ProfileNews';

import ExampleImageOne from '../../assets/images/1.jpg'
import ExampleImageTwo from '../../assets/images/2.jpg'
import ExampleImageThree from '../../assets/images/3.jpg'

const ProfileContent = () => {
  return (
    <section className="content">
      <article className="gallery gallery--profile">
        <article className="gallery__column gallery__column--profile">
          <img src={ExampleImageOne} alt=""/>
          <img src={ExampleImageTwo} alt=""/>
        </article>
        <article className="gallery__column gallery__column--profile">
          <img src={ExampleImageThree} alt=""/>
          <img src={ExampleImageOne} alt=""/>
        </article>
        <article className="gallery__column gallery__column--profile">
          <img src={ExampleImageTwo} alt=""/>
          <img src={ExampleImageThree} alt=""/>
        </article>
      </article>
      <ProfileNews />
    </section>
  )
}

export default ProfileContent;
