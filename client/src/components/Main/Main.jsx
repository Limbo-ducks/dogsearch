import React from 'react'
import './Main.scss';
import Jumbotron from '../Main/Jumbotron';
import Grid from '../Main/Grid';
import InfoSection from './InfoSection';


const Main = () => {
  return (
    <main className="main">
      <Jumbotron />
      <InfoSection />
      <Grid />
    </main>
  )
}

export default Main;
