import React from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { map } from '../../lib/helpers'
import aboutFields from './aboutFields'
import appearanceFields from './appearanceFields'
import contactFields from './contactFields'
import measurementFields from './measurementFields'
import './TalentProfile.scss'

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
      renderInput={params => <TextField {...params} label={`${x.label}${x.required ? '*' : ''}`} variant="outlined"/>}
    />
  ),
  text: (onChange, x) => (
    <TextField
      key={x.name}
      className={`${x.label.toLowerCase()}`}
      label={`${x.label}${x.required ? '*' : ''}`}
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
    <section className='my-8 talent-registration' >
      <section className='talent-registration-contact info-container'>
        <h2>Contact Information</h2>
        <div className='talent-subfield'>{printFields(contactFields)}</div>
        <p>* Fields are required</p>
      </section>
      <section className='talent-registration-about info-container'>
        <h2>About Me</h2>
        <div className='talent-subfield'>{printFields(aboutFields)}</div>
        <p>* Fields are required</p>
      </section>
      <section className='talent-registration-appearance info-container'>
        <h2>Appearance</h2>
        <div className='talent-subfield'>{printFields(appearanceFields)}</div>
        <p>* Fields are required</p>
      </section>
      <section className='talent-registration-measurements info-container'>
        <h2>Measurements</h2>
        <div className='talent-subfield'>{printFields(measurementFields)}</div>
        <p>* Fields are required</p>
      </section>
    </section>
  )
}

export default TalentProfile
