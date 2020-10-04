import React from 'react';
import './About.scss';
import Background from '../../assets/images/daschund.jpg';
import Footer from '../Footer/Footer';
import salt from '../../assets/images/salt.jfif';

const About = () => {
  return (
    <>
      <main class="main">
        <section className="about">
          <section className="about__item">
            <img src={Background} alt="" className="about__item__background"/>
          </section>
          <section className="about__item">
            <section className="about__item__content">
              <h3>About DogSearch</h3>
              <p><b>Note!</b> DogSearch is not a real company and the dogs you see on this page is not up for adoption. DogSearch is a community concept developed for people that are looking to adopt a dog or have adopted a dog and wish to stay in touch with likeminded people.</p>
              <h3>How it works</h3>
              <p>On DogSearch, you can find dogs that would be up for adoption in a real scenario, view their profiles to learn more, create your own profile and then be able to send adoption and meeting requests and much more. It is a service and a community all in one.</p>
            </section>
            <section className="about__item__content">
              <h3>About Us</h3>
              <p>This website was created by the efforts of a team of developers from salt's spring 2020 bootcamp (Artur Zapater, Christian Davidov, Konrad Guzior, Marie Madsen Winther and Ninni Hagström) . The concept of DogSearch was created by Marie Winther Madsen and Ninni Hagström.            </p>
              <a href="https://salt.dev/" target="_blank">
                <img src={salt} alt=""/>
              </a>
              <h3>This project was built with the MERN Stack</h3>
              <ul>
                <li><b>MongoDb</b></li>
                <li><b>Express js</b></li>
                <li><b>React</b></li>
                <li><b>Node.js</b></li>
                <li><b>Sass</b></li>
                <li><b>Passport</b></li>
                <li><b>Firebase</b></li>
                <li><b></b></li>
              </ul>
            </section>
          </section>
        </section>
      </main>
    <Footer />
    </>
  )
}
export default About
