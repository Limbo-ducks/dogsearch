import React from 'react'
import { TextField } from '@material-ui/core'

const SocialMediaCard = ({ name }) => (
  <div className='my-4'>
    <h3>{name}</h3>
    <div className='my-4 media-field'>  
      <TextField label="Link" variant="outlined" />
      <TextField label="Followers" variant="outlined" />
    </div>
  </div>
)

export default SocialMediaCard
