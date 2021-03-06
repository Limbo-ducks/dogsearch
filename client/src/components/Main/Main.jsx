import React from 'react'
import Fade from 'react-reveal/Fade';

import './Main.scss';
import Jumbotron from '../Main/Jumbotron';
import Grid from '../Main/Grid';
import InfoSection from './InfoSection';
import Footer from '../Footer/Footer';
import Background from '../../assets/images/sidebackground.jpg';

const Main = () => {
  return (
    <main className="main">
      <Jumbotron />
      <InfoSection />
      <Grid />
      <section className="main__information">
        <section className="main__information__item">
          <Fade left>
            <img src={Background} alt="" className="main__information__item__image"/>
          </Fade>
        </section>
        <section className="main__information__item">
          <section className="main__information__item__content">
            <Fade right>
              <h3>Our mission</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ad. Esse, perferendis! Debitis quas porro temporibus repellat hic aperiam corporis eaque nulla illum repellendus ab veritatis officiis, nesciunt natus labore.</p>
            </Fade>
          </section>
        </section>
      </section>
      <Footer/>
    </main>
  )
}

export default Main;
