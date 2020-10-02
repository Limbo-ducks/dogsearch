import React from 'react'
import './DogContent.scss'
import ExampleImageOne from '../../assets/images/corgi.jpg'
import ExampleImageTwo from '../../assets/images/germanshepard.jpg'
import ExampleImageThree from '../../assets/images/daschund.jpg'
import DogVideo from './DogVideo';
import ImageGallery from './ImageGallery'

const DogContent = ({data}) => {
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
      <h4 className="content__title">Videos</h4>
      <DogVideo data={data.media}/>
      <button className="info__footer__button info__footer__button--content">View Videos</button>
      <span id="images" className="spanscroll"></span>
      <h4 className="content__title">Images</h4>

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
      <button className="info__footer__button info__footer__button--content">View Gallery</button>
      <span id="attributes" className="spanscroll"></span>
      <h4 className="content__title">Information</h4>
    </section>
  )
}

export default DogContent;
