import React from 'react'
import * as R from 'ramda'
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { map } from '../../lib/helpers'
import aboutFields from './aboutFields'
import accentFields from './accentFields'
import appearanceFields from './appearanceFields'
import athleticFields from './athleticFields'
import contactFields from './contactFields'
import disabilityFields from './disabilityFields'
import experienceFields from './experienceFields'
import languageFields from './languageFields'
import measurementFields from './measurementFields'
import performanceFields from './performanceFields'

const getAutocompleteValue = (options, value) => R.is(Object, value)
  ? value
  : options.find(x => x.value === value)

const types = (data, onChange, handleCheck) => ({
  autocomplete: x => (
    <Autocomplete
      className={`picklist ${x.class} ${x.name} `}
      key={x.name}
      id={x.name}
      options={x.options}
      onChange={onChange(x.name)}
      getOptionLabel={option => typeof option === 'string' ? option : option.text}
      multiple={x.multiple}
      disableCloseOnSelect={x.multiple ? true : false}
      renderInput={params => <TextField {...params} label={x.label} variant="outlined"/>}
      value={getAutocompleteValue(x.options, data[x.name])}
    />
  ),
  check: x => (
    <FormControlLabel
      key={x.name}
      label={x.label}
      control={<Checkbox
        name={x.name}
        onChange={handleCheck(x.prop)}
        checked={R.includes(x.name, data[x.prop])}
      />}
    />
  ),
  text: x => (
    <TextField
      key={x.name}
      label={x.label}
      onChange={onChange(x.name)}
      variant="outlined"
      multiline={x.multiline}
      value={data[x.name]}
    />
  ),
})

const makeField = (data, onChange, handleCheck) => x => types(data, onChange, handleCheck)[x.type](x)

const TalentProfile = ({ data, handleChange, handleCheckBoxes }) => {
  console.log(data)
  const printFields = map(makeField(data, handleChange, handleCheckBoxes))

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
        <h3>Athletic Endeavors</h3>
        {printFields(athleticFields)}
      </section>
      <section>
        <h3>Performance Skills</h3>
        {printFields(performanceFields)}
      </section>
      <section>
        <h3>Accents</h3>
        {printFields(accentFields)}
      </section>
      <section>
        <h3>Languages</h3>
        {printFields(languageFields)}
      </section>
      <section>
        <h3>Disabilities</h3>
        {printFields(disabilityFields)}
      </section>
      <section>
        <h3>Measurements</h3>
        {printFields(measurementFields)}
      </section>
      <section>
        <h3>Experience</h3>
        {printFields(experienceFields)}
      </section>
    </section>
  )
}

export default TalentProfile
