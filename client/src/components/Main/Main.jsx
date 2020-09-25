import React from 'react'
import './Main.scss';
import Jumbotron from '../Main/Jumbotron';
import Grid from '../Main/Grid';
import InfoSection from './InfoSection';
import Footer from '../Footer/Footer';


const Main = () => {
  return (
    <main className="main">
      <Jumbotron />
      <InfoSection />
      <Grid />
      <Footer/>
    </main>
  )
}

export default Main;
