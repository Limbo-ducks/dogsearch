import React from 'react'
import './ProfileContent.scss'
import ProfileNews from './ProfileNews';

import ExampleImageOne from '../../assets/images/1.jpg'
import ExampleImageTwo from '../../assets/images/2.jpg'
import ExampleImageThree from '../../assets/images/3.jpg'
import ProfileVideo from './ProfileVideo';
import ProfileAudio from './ProfileAudio';
import ProfileAttributes from './ProfileAttributes';

const ProfileContent = () => {

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
  });
});

  return (
    <section className="content">
      <span id="images"></span>
      <h3 className="content__news__title">Images</h3>
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
      <span id="video"></span>
      <h3 className="content__news__title">Video</h3>
      <ProfileVideo />
      <span id="audio"></span>
      <h3 className="content__news__title">Audio</h3>
      <ProfileAudio />
      <span id="news"></span>
      <h3 className="content__news__title">News</h3>
      <ProfileNews />
      <span id="attributes"></span>
      <h3 className="content__news__title">Attributes</h3>
      <ProfileAttributes />
    </section>
  )
}

export default ProfileContent;
