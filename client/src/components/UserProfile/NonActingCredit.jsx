import React from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

const roleOpts = [
  'Animation Department Memeber', 'Art Department Member', 'Art Director', 'Second Unit Director',
  'Camera and Electrical Department Member', 'Casting Department Member', 'Casting Directors'
]

const typeOpts = [
  'Film', 'Theatre', 'TV', 'Commercials', 'Voice Over', 'Internet', 'Video Games', 'Nominations/Awards'
]

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 100 }, (_, i) => currentYear - i + '')

const NonActingCredit = () => (
  <>
    <Autocomplete
      options={typeOpts}
      renderInput={ps => <TextField {...ps} label="Type" variant="outlined" />}
    />
    <TextField label="Title" variant="outlined" />
    <Autocomplete
      options={roleOpts}
      renderInput={ps => <TextField {...ps} label="Role" variant="outlined" />}
    />
    <Autocomplete 
      options={years}
      renderInput={ps => <TextField {...ps} label="Year" variant="outlined" />}
    />
  </>
)

export default NonActingCredit
