import React from 'react'
import * as R from 'ramda'
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import AdditionalSkills from './AdditionalSkills'
import CreditSection from './CreditSection'
import Representation from './Representation'
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
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
  },
  border: {
    border: '1px solid lightgray',
    padding: 0,
    'box-shadow': 'none'
  },
  content: {
    margin: 0,
  }
}));

const types = (data, onChange, handleCheck) => ({
  autocomplete: x => (
    <Autocomplete
      className={`picklist ${x.name} `}
      key={x.name}
      id={x.name}
      options={x.options}
      onChange={onChange(x.name)}
      getOptionLabel={option => {console.log('HERE!!'); console.log(option); return typeof option === 'string' ? option : option.text}}
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
  autocompleteMultiple: x => (
    <Autocomplete
      className={`picklist ${x.name} `}
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
})

const makeField = (data, onChange, handleCheck) => x => types(data, onChange, handleCheck)[x.type](x)

const TalentProfile = ({ data, handleChange, handleCheckBoxes }) => {
  const classes = useStyles();
  const printFields = map(makeField(data, handleChange, handleCheckBoxes))

  return (
    <section className='my-8 talent-registration' >
      <section className='talent-registration-contact info-container'>
        <Accordion className={classes.border}>
          <AccordionSummary
            className={classes.content}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Contact Information</h2>
          </AccordionSummary>
          <AccordionDetails className={classes.root}>
            <div className='talent-subfield'>{printFields(contactFields)}</div>
            <p>* Fields are required</p>
          </AccordionDetails>
        </Accordion>  
      </section>
      <section className='talent-registration-about info-container'>
        <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h2>About Me</h2>
            </AccordionSummary>
            <AccordionDetails className={classes.root}>
              <div className='talent-subfield'>{printFields(aboutFields)}</div>
              <p>* Fields are required</p>
            </AccordionDetails>
          </Accordion>  
      </section>
      <Representation />
      <section className='talent-registration-appearance info-container'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Appearance</h2>
          </AccordionSummary>
          <AccordionDetails className={classes.root}>
            <div className='talent-subfield'>{printFields(appearanceFields)}</div>
            <p>* Fields are required</p>
          </AccordionDetails>
        </Accordion>
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Measurements</h2>
          </AccordionSummary>
          <AccordionDetails className={classes.root}>
            <div className='talent-subfield'>{printFields(measurementFields)}</div>
            <p>* Fields are required</p>
          </AccordionDetails>
        </Accordion>
      </section>
      <section className='talent-registration-experience info-container'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Experience</h2>
          </AccordionSummary>
          <AccordionDetails className={classes.root}>
            <div className='talent-subfield'>{printFields(experienceFields)}</div>
          </AccordionDetails>
        </Accordion>
      </section>
      <CreditSection />
      <section className='talent-registration-media info-container'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Media Uploads</h2>
          </AccordionSummary>
          <AccordionDetails className={classes.root}>
            <div className='talent-subfield'>{printFields(mediaFields)}</div>
          </AccordionDetails>
        </Accordion>
      </section>
    </section>
  )
}

export default TalentProfile
