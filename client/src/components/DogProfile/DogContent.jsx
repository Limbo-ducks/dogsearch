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
      <h3 className="content__title">Videos</h3>
      <DogVideo data={data.media}/>
      <button className="jumbotron__buttons__button jumbotron__buttons__button--dog">View Videos</button>
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
      <button className="jumbotron__buttons__button jumbotron__buttons__button--dog">View Gallery</button>
      <span id="attributes" className="spanscroll"></span>
      <h3 className="content__title">Information</h3>
    </section>
  )
}

export default DogContent;
