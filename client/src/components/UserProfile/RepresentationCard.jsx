import React from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

const typeOpts = [
  'Representation Agent',
  'Representation Manager',
  'Representation Publicist',
]

const RepresentationCard = () => (
  <div>
    <Autocomplete
      className='my-4'
      options={typeOpts}
      renderInput={ps => <TextField {...ps} label="Type" />}
    />
    <div className='talent-subfield'>
      <TextField className='textA' label="Name" />
      <TextField className='textB' label="Company" />
      <TextField className='textC' label="Phone" />
      <TextField className='textD' label="Email" />
    </div>
  </div>
)

export default RepresentationCard
