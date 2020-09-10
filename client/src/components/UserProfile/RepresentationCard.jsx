import React from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

const typeOpts = [
  'Representation Agent',
  'Representation Manager',
  'Representation Publicist',
]

const RepresentationCard = () => (
  <div className='my-4'>
    <Autocomplete
      options={typeOpts}
      renderInput={ps => <TextField {...ps} label="Type" variant="outlined" />}
    />
    <TextField label="Name" variant="outlined" />
    <TextField label="Company" variant="outlined" />
    <TextField label="Phone" variant="outlined" />
    <TextField label="Email" variant="outlined" />
  </div>
)

export default RepresentationCard
