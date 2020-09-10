import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import SocialMediaCard from './SocialMediaCard'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SocialMedia = () => {
  const [list, setList] = useState([ 'Facebook', 'Instagram', 'YouTube', 'Twitter', 'TikTok', 'Other' ])

  return (
    <section className='talent-registration-social info-container'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>Social Media</h2>
        </AccordionSummary>
        <AccordionDetails>
          <p>This section is not fully functional and none of the information will be actually added to your profile</p>
          <div className='talent-subfield'>{list.map((x, i) => <SocialMediaCard key={`${x}-${i}`} name={x} />)}</div>
          <Button variant='outlined' onClick={() => setList(list.concat('Other'))}>Add More</Button>
        </AccordionDetails>
      </Accordion>
      
      
    </section>
  )
}

export default SocialMedia
