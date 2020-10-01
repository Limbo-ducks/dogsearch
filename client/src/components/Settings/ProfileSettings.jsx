import React from 'react'
import * as R from 'ramda'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { getAutocompleteValue, map } from '../../lib/helpers'

import contactFields from './contactFields'
import mediaFields from './mediaFields'

import './ProfileSettings.scss'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Upload from '../Upload/Upload'

const isError = x => R.or(R.isEmpty(x), R.isNil(x))

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
  },
  border: {
    'border-bottom': '1px solid lightgray',
    padding: 0,
    'box-shadow': 'none'
  },
  content: {
    margin: 0,
  }
}));

const types = (checked, data, onChange ) => ({
  autocomplete: x => (
    <Autocomplete
      className={`picklist ${x.name}`}
      key={x.name}
      id={x.name}
      options={x.options}
      onChange={onChange(x.name)}
      getOptionLabel={option => typeof option === 'string' ? option : option.text}
      multiple={x.multiple}
      disableCloseOnSelect={x.multiple ? true : false}
      value={getAutocompleteValue(x.options, data[x.name])}
      renderInput={params => <TextField
        {...params}
        label={`${x.label}${x.required ? '*' : ''}`}
        className='mx-4'
        error={checked && x.required && isError(getAutocompleteValue(x.options, data[x.name]))}
        helperText={checked && x.required && params.inputProps.value === '' ? 'Please fill in the form' : ''}
      />}
    />
  ),
  text: x => (
    <TextField
      key={x.name}
      className={`${x.label.toLowerCase()}`}
      label={`${x.label}${x.required ? '*' : ''}`}
      onChange={onChange(x.name)}
      multiline={x.multiline}
      value={data[x.name]}
      error={checked && x.required && isError(data[x.name])}
      helperText={checked && data[x.name] === '' ? 'Please fill in the form' : ''}
    />
  ),
  file: x => (
    <Upload
      key={x.name}
      onChange={onChange(x.name)}
      label={x.label}
    />
  )
})

const makeField = (checked, data, onChange ) => x => types(checked, data, onChange)[x.type](x)

const ProfileSettings = ({ checked, data, handleChange }) => {
  const classes = useStyles();
  const printFields = map(makeField(checked, data, handleChange ))

  return (
    <section className='my-8 profile-registration' >
      <section className='profile-registration-contact info-container'>


        <Accordion className={classes.border}>
          <AccordionSummary
            className={classes.content}
            expandIcon={<ArrowDropDownIcon/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            
          >
            <h2>Contact Information</h2>
          </AccordionSummary>
          <AccordionDetails className={classes.root}>
            <div className='profile-subfield'>{printFields(contactFields)}</div>
            <p>* Fields are required</p>
          </AccordionDetails>
        </Accordion>  


      </section>
      <section className='profile-registration-media info-container'>
        <Accordion className={classes.border}>
          <AccordionSummary
            className={classes.content}
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Media Uploads</h2>
          </AccordionSummary>
          <AccordionDetails className={classes.root}>
            <div className='profile-subfield'>{printFields(mediaFields)}</div>
          </AccordionDetails>
        </Accordion>
      </section>
    </section>
  )
}

export default ProfileSettings
