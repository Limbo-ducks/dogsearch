import React, { useEffect, useState } from 'react'
import * as R from 'ramda'
import { Autocomplete } from '@material-ui/lab'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'
import TalentProfile from './TalentProfile'
import { getAutocompleteValue, map, maybe } from '../../lib/helpers'
import './UserProfile.scss'

const fetchOpts = {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
}

const typeOpts = [
  { value: 'talent', text: 'Talent' },
  { value: 'searcher', text: 'Talent Searcher' },
  { value: 'representation', text: 'Representation' },
]

const parseValue = map(R.prop('value'))

const getValue = R.pipe(
  parseValue,
  x => console.log(x) || x,
)

const setIfDefined = R.pathOr('')
const setArray = R.pathOr([])

const UserProfile = ({ history, user }) => {
  const [data, setData] = useState({})

  const handleChangeData = prop =>
    (event, value) => {
      const newValue = value
        ? getValue(value)
        : event.target.value
          ? event.target.value
          : undefined

      setData({
        ...data,
        [prop]: newValue,
      })
    }

  const handleCheckBoxes = prop => event => {
    setData({
    ...data,
    [prop]: event.target.checked
      ? data[prop].concat(event.target.name)
      : data[prop].filter(x => x !== event.target.name)
  })}

  const setFormData = data => setData({
    'contact.address': setIfDefined(['contact', 'address'], data),
    'contact.city': setIfDefined(['contact', 'city'], data),
    'contact.postalCode': setIfDefined(['contact', 'postalCode'], data),
    'contact.state': setIfDefined(['contact', 'state'], data),
    'contact.country': setIfDefined(['contact', 'country'], data),
    'contact.phone': setIfDefined(['contact', 'phone'], data),
    'contact.email': setIfDefined(['contact', 'email'], data),
    'profession': setIfDefined(['profession'], data),
    'name': setIfDefined(['name'], data),
    'biography': setIfDefined(['biography'], data),
    'education': setIfDefined(['education'], data),
    'training': setIfDefined(['training'], data),
    'citizenship': setIfDefined(['citizenship'], data),
    'passport': setIfDefined(['passport'], data),
    'workPermit': setIfDefined(['workPermit'], data),
    'imdb': setIfDefined(['imdb'], data),
    'birthDate': setIfDefined(['birthDate'], data),
    'age': setIfDefined(['age'], data),
    'hairColor': setIfDefined(['hairColor'], data),
    'hairLength': setIfDefined(['hairLength'], data),
    'eyeColor': setIfDefined(['eyeColor'], data),
    'gender': setIfDefined(['gender'], data),
    'ethnicity': setIfDefined(['ethnicity'], data),
    'nudity': setIfDefined(['nudity'], data),
    'bodyModifications': setArray(['bodyModifications'], data),
    'measurements.height': setIfDefined(['measurements', 'height'], data),
    'measurements.weight': setIfDefined(['measurements', 'weight'], data),
    'measurements.bodyType': setIfDefined(['measurements', 'bodyType'], data),
    'measurements.shirtSize': setIfDefined(['measurements', 'shirtSize'], data),
    'measurements.sleeveLength': setIfDefined(['measurements', 'sleeveLength'], data),
    'measurements.neck': setIfDefined(['measurements', 'neck'], data),
    'measurements.jacketChest': setIfDefined(['measurements', 'jacketChest'], data),
    'measurements.jacketLength': setIfDefined(['measurements', 'jacketLength'], data),
    'measurements.waist': setIfDefined(['measurements', 'waist'], data),
    'measurements.inseam': setIfDefined(['measurements', 'inseam'], data),
    'measurements.shoeWidth': setIfDefined(['measurements', 'shoeWidth'], data),
    'measurements.shoeLength': setIfDefined(['measurements', 'shoeLength'], data),
    'measurements.gloves': setIfDefined(['measurements', 'gloves'], data),
    'measurements.hat': setIfDefined(['measurements', 'hat'], data),
    'measurements.notes': setIfDefined(['measurements', 'notes'], data),
    'athleticEndeavors': setArray(['athleticEndeavors'], data),
    'performance': setArray(['performance'], data),
    'accent': setArray(['accent'], data),
    'languages': setArray(['languages'], data),
    'disabilities': setArray(['disabilities'], data),
    'resume': setIfDefined(['resume'], data),
    'professionYears': setIfDefined(['professionYears'], data),
    'media.headShot': setIfDefined(['media', 'headShot'], data),
    'media.slateShot': setIfDefined(['media', 'slateShot'], data),
    'media.mediaReel': setIfDefined(['media', 'mediaReel'], data),
    'media.audio': setIfDefined(['media', 'audio'], data),
    'type': setIfDefined(['type'], data),
  })

  useEffect(() => {
    fetch('/api/users/me')
      .then(res => res.json())
      .then(setFormData)
      .catch(console.error)
  }, [])

  const updateProfile = () => {
    console.log(data)
    fetch('/api/users', { ...fetchOpts, body: JSON.stringify(data) })
      .then(() => history.push(`/`))
      .catch(console.error)
  }

  if (!user) return <div>You need to sign in to create a profile!</div>
  if (R.isEmpty(data)) return <div>Loading...</div>

  return (
    <section className='add-profile my-32'>
      <h1 className='m-0 ml-4 w-full' >What is your role?</h1>
      <Autocomplete
        className='type-input'
        style={{'margin': '3em 1.5em'}}
        options={typeOpts}
        id='type'
        onChange={handleChangeData('type')}
        getOptionLabel={option => typeof option === 'string' ? option : option.text}
        renderInput={params => <TextField {...params} label="Type" variant="outlined" />}
        value={getAutocompleteValue(typeOpts, data.type)}
      />
      {data.type === 'talent' && <TalentProfile
        data={data}
        handleChange={handleChangeData}
        handleCheckBoxes={handleCheckBoxes}
      />}
      {data.type ? <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={updateProfile}
      >Submit</Button> : null}
    </section>
  )
}

export default UserProfile
