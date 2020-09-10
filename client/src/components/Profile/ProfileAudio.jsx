import React from 'react'

import './ProfileAudio.scss'
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

const ProfileAudio = () => {
  return (
    <section className="content__audio">
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/567921351&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <article className="content__description">
        <h4>Description:</h4>
        <h4>Length:</h4>
      </article>
      <ul className="content__audio__list">
        <li><AudiotrackIcon /> Commercial reel</li>
        <li><AudiotrackIcon /> Character reel</li>
        <li><AudiotrackIcon /> Commercial reel</li>
        <li><AudiotrackIcon /> Character reel</li>
        <li><AudiotrackIcon /> Commercial reel</li>
        <li><AudiotrackIcon /> Character reel</li>
      </ul>

    </section>
  )
}

export default ProfileAudio
