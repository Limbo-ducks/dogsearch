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
      renderInput={ps => <TextField {...ps} label="Type" variant="outlined" />}
    />
    <div className='talent-subfield'>
      <TextField className='textA' label="Name" variant="outlined" />
      <TextField className='textB' label="Company" variant="outlined" />
      <TextField className='textC' label="Phone" variant="outlined" />
      <TextField className='textD' label="Email" variant="outlined" />
    </div>
  </div>
)

export default RepresentationCard
