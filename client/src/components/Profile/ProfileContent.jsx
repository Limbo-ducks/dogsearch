import React from 'react'
import './ProfileContent.scss'
// import ProfileNews from './ProfileNews';

import ExampleImageOne from '../../assets/images/1.jpg'
import ExampleImageTwo from '../../assets/images/2.jpg'
import ExampleImageThree from '../../assets/images/3.jpg'
import ProfileVideo from './ProfileVideo';
// import ProfileAttributes from './ProfileAttributes';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ImageGallery from './ImageGallery'

const ProfileContent = ({data}) => {

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
      <span id="video" className="spanscroll"></span>
      <h3 className="content__title">Videos</h3>
      <ProfileVideo data={data.media}/>
      <button className="jumbotron__buttons__button jumbotron__buttons__button--talent">View Videos</button>
      <span id="images" className="spanscroll"></span>
      <h3 className="content__title">Images</h3>

      <article className="gallery gallery--profile">

        {data.gallery ? 
        <ImageGallery data={data.gallery} />
          :
          <>
          <article className="gallery__column gallery__column--profile">
            <img src={ExampleImageTwo} alt=""/>
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
          </>
          }
      </article>
      <button className="jumbotron__buttons__button jumbotron__buttons__button--talent">View Gallery</button>
      <span id="attributes" className="spanscroll"></span>
      <h3 className="content__title">Information</h3>
      {/* <ProfileAttributes data={data}/> */}
    </section>
  )
}

export default ProfileContent;
