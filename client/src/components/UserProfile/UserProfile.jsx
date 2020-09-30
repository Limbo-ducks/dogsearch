import React, { useEffect, useState } from 'react'
import * as R from 'ramda'
import Button from '@material-ui/core/Button'
import TalentProfile from './TalentProfile'
import { map } from '../../lib/helpers'
import './UserProfile.scss'

const fetchOpts = {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
}

const requiredFields = [
  'name',
  'contact.address',
  'contact.city',
  'contact.postalCode',
  'contact.country',
  'contact.email',
  'contact.phone',
]

const isError = data => x => R.or(R.isEmpty(data[x]), R.isNil(data[x]))
const anyError = data => R.any(isError(data))

const getValue = map(R.prop('value'))

const setIfDefined = R.pathOr('')

const UserProfile = ({ history, user }) => {
  console.log(user)
  const [data, setData] = useState({})
  const [checked, setChecked] = useState(false)

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

  const setFormData = data => setData({
    'contact.address': setIfDefined(['contact', 'address'], data),
    'contact.city': setIfDefined(['contact', 'city'], data),
    'contact.postalCode': setIfDefined(['contact', 'postalCode'], data),
    'contact.state': setIfDefined(['contact', 'state'], data),
    'contact.country': setIfDefined(['contact', 'country'], data),
    'contact.phone': setIfDefined(['contact', 'phone'], data),
    'contact.email': setIfDefined(['contact', 'email'], data),
    'name': setIfDefined(['name'], data),
    'biography': setIfDefined(['biographyobject'], data),
    'birthDate': setIfDefined(['birthDate'], data),
    'image': setIfDefined(['image'], data),
    'banner': setIfDefined(['banner'], data),
    'type': setIfDefined(['type'], data),
  })

  useEffect(() => {
    fetch('/api/users/me')
      .then(res => res.json())
      .then(setFormData)
      .catch(console.error)
  }, [])

  const updateProfile = () => {
    if (anyError(data)(requiredFields)) {
      setChecked(true)
      return
    }
    fetch('/api/users', { ...fetchOpts, body: JSON.stringify(data) })
      .then(() => history.push(`/profile/${user}`))
      .catch(console.error)
  }

  if (!user) return <div>You need to sign in to create a profile!</div>
  if (R.isEmpty(data)) return <div>Loading...</div>

  return (
    <section className='add-profile my-32'>
      <h1 className='m-0 ml-4 h-2' >Tell us about yourself!</h1>
      <TalentProfile
        checked={checked}
        data={data}
        handleChange={handleChangeData}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={updateProfile}
      >Submit</Button>
    </section>
  )
}

export default UserProfile
