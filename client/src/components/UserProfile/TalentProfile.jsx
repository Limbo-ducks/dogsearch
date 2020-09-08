import React from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { map } from '../../lib/helpers'
import aboutFields from './aboutFields'
import appearanceFields from './appearanceFields'
import contactFields from './contactFields'
import measurementFields from './measurementFields'

const types = {
  autocomplete: (onChange, x) => (
    <Autocomplete
      className={`picklist ${x.class} ${x.name} `}
      key={x.name}
      id={x.name}
      options={x.options}
      onChange={onChange(x.name)}
      getOptionLabel={option => option.text}
      multiple={x.multiple}
      disableCloseOnSelect={x.multiple ? true : false}
      renderInput={params => <TextField {...params} label={x.label} variant="outlined"/>}
    />
  ),
  text: (onChange, x) => (
    <TextField
      key={x.name}
      label={x.label}
      onChange={onChange(x.name)}
      variant="outlined"
      multiline={x.multiline}
    />
  ),
}

const makeField = onChange => x => types[x.type](onChange, x)

const TalentProfile = ({ data, handleChange }) => {
  console.log(data)
  const printFields = map(makeField(handleChange))

  return (
    <section className="my-8">
      <section>
        <h3>Contact Information</h3>
        {printFields(contactFields)}
      </section>
      <section>
        <h3>About Me</h3>
        {printFields(aboutFields)}
      </section>
      <section>
        <h3>Appearance</h3>
        {printFields(appearanceFields)}
      </section>
      <section>
        <h3>Measurements</h3>
        {printFields(measurementFields)}
      </section>
    </section>
  )
}

export default TalentProfile
