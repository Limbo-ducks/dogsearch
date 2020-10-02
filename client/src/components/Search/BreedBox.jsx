import React from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'

const options = [
    { value: 'beagle', text: 'Beagle' },
    { value: 'goldenRetriever', text: 'Golden Retriever' },
    { value: 'labrador', text: 'Labrador' },
    { value: 'pitbull', text: 'Pitbull' },
    { value: 'pug', text: 'Pug' },
    { value: 'daschhound', text: 'Daschhound' },
    { value: 'germanShepherd', text: 'German Shepherd' },
    { value: 'corgi', text: 'Corgi' },
    { value: 'mixed', text: 'Mixed' }
]

const getDefValue = def => {
    const value = options.find(x => x.value === def)
    return value ? [ value ] : []
}

const BreedBox = ({ def, onChange }) => (
    <Autocomplete
        className="picklist"
        id='breed'
        defaultValue={getDefValue(def)}
        options={options}
        onChange={onChange}
        getOptionLabel={(option) => option.text}
        multiple={true}
        renderInput={(params) => <TextField {...params} label={'Breed'} variant="outlined" />}
    />
)

export default BreedBox
