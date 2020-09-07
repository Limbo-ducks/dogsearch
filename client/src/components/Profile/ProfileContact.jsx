import React from 'react'
import './ProfileContact.scss'

const ProfileContact = () => {
  return (
    <section className="content">
      <article className="content__chat">
        <textarea name="" id="" cols="30" rows="10" placeholder="Send a message"></textarea>      
        <button className="content__chat__button">Send</button>
      </article>    
    </section>
  )
}

export default ProfileContact;
