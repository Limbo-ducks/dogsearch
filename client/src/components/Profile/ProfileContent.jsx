import React from 'react'
import './ProfileContent.scss'
import ProfileNews from './ProfileNews';

import ExampleImageOne from '../../assets/images/1.jpg'
import ExampleImageTwo from '../../assets/images/2.jpg'
import ExampleImageThree from '../../assets/images/3.jpg'
import ProfileVideo from './ProfileVideo';
import ProfileAudio from './ProfileAudio';
import ProfileAttributes from './ProfileAttributes';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const ProfileContent = props => {

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
      <h3 className="content__title">Images</h3>
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
      <span id="video" className="spanscroll"></span>
      <h3 className="content__title">Video</h3>
      <ProfileVideo />
      <span id="audio" className="spanscroll"></span>
      <h3 className="content__title">Audio</h3>
      <ProfileAudio />
      <span id="news" className="spanscroll"></span>
      <h3 className="content__title">News</h3>
      <ProfileNews />
      <span id="attributes" className="spanscroll"></span>
      <h3 className="content__title">Attributes</h3>
      <ProfileAttributes data={props.data}/>
    </section>
  )
}

export default ProfileContent;
