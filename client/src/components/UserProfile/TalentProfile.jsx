import React from 'react'
import * as R from 'ramda'
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import AdditionalSkills from './AdditionalSkills'
import CreditSection from './CreditSection'
import SocialMedia from './SocialMedia'
import { getAutocompleteValue, map } from '../../lib/helpers'
import aboutFields from './aboutFields'
import accentFields from './accentFields'
import appearanceFields from './appearanceFields'
import athleticFields from './athleticFields'
import contactFields from './contactFields'
import disabilityFields from './disabilityFields'
import experienceFields from './experienceFields'
import languageFields from './languageFields'
import measurementFields from './measurementFields'
import mediaFields from './mediaFields'
import performanceFields from './performanceFields'
import unionFields from './unionFields'
import './TalentProfile.scss'

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
      value={getAutocompleteValue(x.options, data[x.name])}
      renderInput={params => <TextField {...params} label={`${x.label}${x.required ? '*' : ''}`} variant="outlined" />}
    />
  ),
  check: x => (
    <FormControlLabel
      className={`${x.label.toLowerCase()}`}
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
      className={`${x.label.toLowerCase()}`}
      label={`${x.label}${x.required ? '*' : ''}`}
      onChange={onChange(x.name)}
      variant="outlined"
      multiline={x.multiline}
      value={data[x.name]}
    />
  ),
})

const makeField = (data, onChange, handleCheck) => x => types(data, onChange, handleCheck)[x.type](x)

const TalentProfile = ({ data, handleChange, handleCheckBoxes }) => {
  const printFields = map(makeField(data, handleChange, handleCheckBoxes))

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
      <section className='info-container'>
        <h2>Union Information</h2>
        {printFields(unionFields)}
      </section>
      <section className='talent-registration-athletic info-container'>
        <h2>Athletic Endeavors</h2>
        <div className='talent-subfield'>{printFields(athleticFields)}</div>
      </section>
      <section className='talent-registration-skills info-container'>
        <h2>Performance Skills</h2>
        <div className='talent-subfield'>{printFields(performanceFields)}</div>
      </section>
      <section className='talent-registration-accents info-container'>
        <h2>Accents</h2>
        <div className='talent-subfield'>{printFields(accentFields)}</div>
      </section>
      <section className='talent-registration-languages info-container'>
        <h2>Languages</h2>
        <div className='talent-subfield'>{printFields(languageFields)}</div>
      </section>
      <AdditionalSkills />
      <section className='talent-registration-disabilities info-container'>
        <h2>Disabilities</h2>
        <div className='talent-subfield'>{printFields(disabilityFields)}</div>
      </section>
      <SocialMedia />
      <section className='talent-registration-measurements info-container'>
        <h2>Measurements</h2>
        <div className='talent-subfield'>{printFields(measurementFields)}</div>
        <p>* Fields are required</p>
      </section>
      <section className='talent-registration-experience info-container'>
        <h2>Experience</h2>
        <div className='talent-subfield'>{printFields(experienceFields)}</div>
      </section>
      <CreditSection />
      <section className='talent-registration-media info-container'>
        <h2>Media Uploads</h2>
        <div className='talent-subfield'>{printFields(mediaFields)}</div>
      </section>
    </section>
  )
}

export default TalentProfile
