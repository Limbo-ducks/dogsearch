import React from 'react'
import './About.scss'
import Background from '../../assets/images/daschund.jpg'

const About = () => {
  return (
    <main class="main">
      <section className="about">
        <section className="about__item">
          <img src={Background} alt="" className="about__item__background"/>
        </section>
        <section className="about__item">
          <section className="about__item__content">
            <h3>About DogSearch</h3>
            <p>Note! DogSearch is not a real company and the dogs you see on this page is not up for adoption. DogSearch is a website concept developed by a team from salt to showcase web development abilities.</p>
          </section>
          <section className="about__item__content">
            <img src="" alt=""/>
            <img src="" alt=""/>
          </section>
          <section className="about__item__content">
            <h3>About Us</h3>
            <p>This website was created by the efforts of a team of developers from salt's spring 2020 bootcamp (Artur, Christian, Konrad, Marie and Ninni) . The concept of DogSearch was created by Marie Winther Madsen and Ninni Hagström.            </p>
            <h3>MERN Stack</h3>
            <ul>
              <li>MongoDb</li>
              <li>Express js</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Sass</li>
              <li>Passport</li>
              <li>Firebase</li>
              <li></li>
            </ul>
          </section>
        </section>
      </section>
    </main>
  )
}
export default About
