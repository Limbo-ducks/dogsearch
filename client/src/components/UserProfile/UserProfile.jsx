import React, { useEffect, useState } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import TalentProfile from './TalentProfile'
import { map, maybe, pipe, prop } from '../../lib/helpers'

const fetchOpts = {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
}

const typeOpts = [ 'Talent', 'Searcher', 'Representation' ]

const parseValue = map(prop('value'))

const getValue = pipe(
  parseValue,
  maybe(x => x.length > 0 || typeof x === 'number')
)

const UserProfile = ({ history, user }) =>  {
  console.log(user)
  // if (!user) history.push('/')
  const [data, setData] = useState({})
  const [type, setType] = useState('')

  const handleChangeData = prop =>
    (event, value) => {
      console.log(value)
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

  // useEffect(() => {
  //   fetch('/api/users/me')
  //     .then(res => res.json())
  //     .then(setData)
  //     .catch(console.error)
  // }, [])

  const updateProfile = () => {
    console.log(data)
    fetch('/api/users', { ...fetchOpts, body: JSON.stringify(data) })
      .then(() => history.push(`/`))
      .catch(console.error)
  }

  return (
    <section className='my-32'>
      <Autocomplete
        options={typeOpts}
        onChange={(_, v) => setType(v)}
        renderInput={ps => <TextField {...ps} label="Type" variant="outlined" />}
      />
      {type === 'Talent' && <TalentProfile data={data} handleChange={handleChangeData} />}
      <button onClick={updateProfile}>Submit</button>
    </section>
  )
}

export default UserProfile