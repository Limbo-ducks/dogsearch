import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import RepresentationCard from './RepresentationCard'

const Representation = () => {
  const [count, setCount] = useState(1)

  return (
    <section className='talent-registration-social info-container'>
      <h2>Representation</h2>
      <p>This section is not fully functional and none of the information will be actually added to your profile</p>
      <div className='talent-subfield'>
        {Array.from({ length: count }, (_, i) => <RepresentationCard key={`rep-card-${i}`} />)}
      </div>
      <Button variant='outlined' onClick={() => setCount(count + 1)}>Add More</Button>
    </section>
  )
}

export default Representation
