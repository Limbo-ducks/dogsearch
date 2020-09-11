import React from 'react'

import './ProfileAudio.scss'
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

const ProfileAudio = ({data}) => {
  return (
    <section className="content__audio">
      {data.audio ? (<><iframe title="vimeo-player" src={data.audio} width="100%" height="auto" frameborder="0" allowfullscreen></iframe>

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
      </ul></>) : <p>No Audio has been provided by the Talent.</p>}

    </section>
  )
}

export default ProfileAudio
