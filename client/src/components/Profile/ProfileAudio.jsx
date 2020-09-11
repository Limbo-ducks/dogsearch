import React from 'react'

import './ProfileAudio.scss'
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

const ProfileAudio = ({data}) => {
  return (
    <section className="content__audio">
      <iframe title="vimeo-player" src={data.audio} width="100%" height="auto" frameborder="0" allowfullscreen></iframe>
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
