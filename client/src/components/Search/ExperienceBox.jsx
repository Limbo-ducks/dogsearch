import React from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'

const options = [
    { value: 'films', text: 'Film' },
    { value: 'theatre', text: 'Theatre' },
    { value: 'tv', text: 'TV' },
    { value: 'modeling', text: 'Modeling' }
]

const getDefValue = def => {
    const value = options.find(x => x.value === def)
    return value ? [ value ] : []
}

const ExperienceBox = ({ def, onChange }) => (
    <Autocomplete
        className="picklist bg-white"
        id='credit'
        defaultValue={getDefValue(def)}
        options={options}
        onChange={onChange}
        getOptionLabel={(option) => option.text}
        multiple={true}
        renderInput={(params) => <TextField {...params} label={'Experience in'} variant="outlined" />}
    />
)

export default ExperienceBox
