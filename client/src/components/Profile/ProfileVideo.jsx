import React from 'react'
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import './ProfileVideo.scss'

const ProfileVideo = () => {
  return (
    <section className="content__video">
      <iframe width="100%" height="315px" src="https://www.youtube.com/embed/W0rC3DhvcRA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <article className="content__description">
        <h4>Description:</h4>
        <h4>Length:</h4>
      </article>
      <ul className="content__video__list">
        <li><VideocamOutlinedIcon /> Theatre reel</li>
        <li><VideocamOutlinedIcon /> Character reel</li>
        <li><VideocamOutlinedIcon /> Commercial reel</li>
        <li><VideocamOutlinedIcon /> Various</li>
        <li><VideocamOutlinedIcon /> Film clip</li>
      </ul>
    </section>
  )
}

export default ProfileVideo
