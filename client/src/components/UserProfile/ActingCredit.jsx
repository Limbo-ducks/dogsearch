import React from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

const castOpts = [
  'Actor', 'Stunt Actor', 'Motion Capture Actor', 'Commercial Actor', 'Extra Actor'
]

const typeOpts = [
  'Film', 'Theatre', 'TV', 'Commercials', 'Voice Over', 'Internet', 'Video Games', 'Nominations/Awards'
]

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 100 }, (_, i) => currentYear - i + '')

const ActingCredit = () => (
  <>
    <Autocomplete
      options={typeOpts}
      renderInput={ps => <TextField {...ps} label="Type" variant="outlined" />}
    />
    <TextField label="Title" variant="outlined" />
    <TextField label="Character" variant="outlined" />
    <Autocomplete
      options={castOpts}
      renderInput={ps => <TextField {...ps} label="Cast Type" variant="outlined" />}
    />
    <Autocomplete 
      options={years}
      renderInput={ps => <TextField {...ps} label="Year" variant="outlined" />}
    />
  </>
)

export default ActingCredit
