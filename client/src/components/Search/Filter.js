import React, { useState } from 'react'
import InputRange from 'react-input-range'
import Select from './Select'
import 'react-input-range/lib/css/index.css'

const Filter = ({ search }) => {
  const [state, setState] = useState({})
  const [height, setHeight] = useState({ min: 100, max: 300 })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const query = Object.entries(state)
      .filter(([_, val]) => val)
      .map(([key, val]) => `${key}=${val}`)
      .join('&')
      .concat(`&height_gte=${height.min}&height_lte=${height.max}`)

    search(query)
  }

  return (
    <div>
      <label>
        <span>Height:</span>
        <InputRange
          minValue={100}
          maxValue={300}
          onChange={setHeight}
          value={height}
        />
      </label>

      <Select
        label='Eye color'
        name='eyeColor'
        handleChange={handleChange}
        options = {[
          { value: 'blue', text: 'Blue' },
          { value: 'brown', text: 'Brown' },
          { value: 'green', text: 'Green' },
          { value: 'black', text: 'Black' },
          { value: 'grey', text: 'Grey' },
          { value: 'hazel', text: 'Hazel' }
        ]}
      />

      <Select
        label='Gender'
        name='gender'
        handleChange={handleChange}
        options = {[
          { value: 'female', text: 'Female' },
          { value: 'male', text: 'Male' },
          { value: 'transgender', text: 'Transgender/Non-Binary' },
          { value: 'twins', text: 'Twins/Multiples' }
        ]}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default Filter
