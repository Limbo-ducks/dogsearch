import React from 'react';
import './About.scss';
import Background from '../../assets/images/daschund.jpg';
import Footer from '../Footer/Footer';

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
              <p>On DogSearch, you can find dogs that are up for adoption, view their profiles to learn more, create your own profile and then be able to send adoption and meeting requests and much more. It is a service and a community all in one.</p>
            </section>
            <section className="about__item__content">
              <img src="" alt=""/>
              <img src="" alt=""/>
            </section>
            <section className="about__item__content">
              <h3>About Us</h3>
              <p>This website was created by the efforts of a team of developers from salt's spring 2020 bootcamp (Artur Zapater, Christian Davidov, Konrad Guzior, Marie Madsen Winther and Ninni Hagström) . The concept of DogSearch was created by Marie Winther Madsen and Ninni Hagström.            </p>
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
    <Footer />
    </>
  )
}
export default About
