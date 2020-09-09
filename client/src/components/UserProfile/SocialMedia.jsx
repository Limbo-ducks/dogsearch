import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import SocialMediaCard from './SocialMediaCard'

const SocialMedia = () => {
  const [list, setList] = useState([ 'Facebook', 'Instagram', 'YouTube', 'Twitter', 'TikTok', 'Other' ])

  return (
    <section>
      <h3>Social Media</h3>
      <p>This section is not fully functional and none of the information will be actually added to your profile</p>
      {list.map((x, i) => <SocialMediaCard key={`${x}-${i}`} name={x} />)}
      <Button onClick={() => setList(list.concat('Other'))}>Add</Button>
    </section>
  )
}

export default SocialMedia
