import React from 'react'
import { TextField } from '@material-ui/core'

const SocialMediaCard = ({ name }) => (
  <article className="flex">
    <div>{name}</div>
    <TextField label="Link" variant="outlined" />
    <TextField label="Followers" variant="outlined" />
  </article>
)

export default SocialMediaCard
