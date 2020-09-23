import React from 'react'

import './ProfileAudio.scss'
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

const ProfileAudio = ({data}) => {
  return (
    <section className="content__audio">
      {data.audio ? (<><iframe title="vimeo-player" src={data.audio} width="100%" height="auto" frameborder="0" allowfullscreen></iframe>

      <ul className="content__audio__list">
        <li><AudiotrackIcon />Example of other Audio</li>
      </ul></>) : <p>No Audio has been provided by the Talent.</p>}

    </section>
  )
}

export default ProfileAudio
