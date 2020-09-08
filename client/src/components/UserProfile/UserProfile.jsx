import React, { useEffect, useState } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import TalentProfile from './TalentProfile'
import { map, maybe, pipe, prop } from '../../lib/helpers'

const typeOpts = [ 'Talent', 'Searcher', 'Representation' ]

const parseValue = map(prop('value'))

const getValue = pipe(
  parseValue,
  maybe(x => x.length > 0)
)

const UserProfile = ({ history, user }) =>  {
  console.log(user)
  // if (!user) history.push('/')
  const [data, setData] = useState({})
  const [type, setType] = useState('')

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

  console.log(data)

  useEffect(() => {
    fetch('/api/users/me')
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  return (
    <section className='my-32'>
      <Autocomplete
        options={typeOpts}
        onChange={(_, v) => setType(v)}
        renderInput={ps => <TextField {...ps} label="Type" variant="outlined" />}
      />
      {type === 'Talent' && <TalentProfile data={data} handleChange={handleChangeData} />}
    </section>
  )
}

export default UserProfile
