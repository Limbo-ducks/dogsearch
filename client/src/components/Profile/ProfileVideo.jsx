import React from 'react'

import './ProfileVideo.scss'

const ProfileVideo = () => {
  return (
    <section className="content__video">
      <iframe width="100%" height="315px" src="https://www.youtube.com/embed/W0rC3DhvcRA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
  )
}

export default ProfileVideo
