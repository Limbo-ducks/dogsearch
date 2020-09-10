import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import SocialMediaCard from './SocialMediaCard'

const SocialMedia = () => {
  const [list, setList] = useState([ 'Facebook', 'Instagram', 'YouTube', 'Twitter', 'TikTok', 'Other' ])

  return (
    <section className='talent-registration-social info-container'>
      <h2>Social Media</h2>
      <p>This section is not fully functional and none of the information will be actually added to your profile</p>
      <div className='talent-subfield'>{list.map((x, i) => <SocialMediaCard key={`${x}-${i}`} name={x} />)}</div>
      <Button variant='outlined' onClick={() => setList(list.concat('Other'))}>Add More</Button>
    </section>
  )
}

export default SocialMedia
