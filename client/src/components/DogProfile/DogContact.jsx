import React from 'react'
import './DogContact.scss'

const DogContact = () => {
  return (
    <section className="content">
      <article className="content__chat">
        <h3>Send a message</h3>
        <p>If you want to send a request to adopt the dog or do you wish to learn more about it? Fill out the form below and we will get back to you as soon as possible.</p>
        <input type="text" placeholder="Name..."/>
        <input type="text" placeholder="Email..."/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Send a message"></textarea>      
        <button className="content__chat__button">Send</button>
      </article>    
    </section>
  )
}

export default DogContact;
