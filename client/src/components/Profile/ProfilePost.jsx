import React from 'react'

import './ProfilePost.scss'

const ProfilePost = () => {
  return (
    <article className="post">
      <article className="post__header">
        <h4>A post example</h4> 
        <h5>Posted at 1400</h5>
      </article>
      <article className="post__content">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates eius provident ipsum assumenda enim quaerat culpa recusandae vitae? Similique doloremque provident, excepturi animi a accusantium facere temporibus est id cumque?</p>
      </article>
    </article>
  )
}

export default ProfilePost
