import React from 'react'
import './Grid.scss';
import Img1 from '../../assets/images/1.jpg'
import Img2 from '../../assets/images/2.jpg'
import Img3 from '../../assets/images/3.jpg'
import Img4 from '../../assets/images/4.jpg'


const Grid = () => {
  return (
    <section className="grid">
      <section className="grid__wrapper">
        <article className="grid__wrapper__item">
          <img src={Img1} alt=""/>
          <h2>text</h2>
        </article>
        <article className="grid__wrapper__item">
          <img src={Img2} alt=""/>
          <h2>text</h2>
        </article>
        <article className="grid__wrapper__item">
          <img src={Img3} alt=""/>
          <h2>text</h2>
        </article>
        <article className="grid__wrapper__item">
          <img src={Img4} alt=""/>
          <h2>text</h2>
        </article>
      </section>
    </section>
  )
}

export default Grid;
