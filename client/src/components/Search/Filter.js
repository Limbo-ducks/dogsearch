import React, { useState } from 'react'
import InputRange from 'react-input-range'
import Select from './Select'
import 'react-input-range/lib/css/index.css'
import filters from './Filters'

const initRanges = {
  'measurements.height': { min: 40, max: 120 }
}

const Filter = ({ search }) => {
  const [options, setOptions] = useState({})
  const [ranges, setRanges] = useState(initRanges)

  const handleChange = e => {
    setOptions({ ...options, [e.target.name]: e.target.value || undefined })
  }

  const handleRangeChange = prop => newRange => setRanges({
    ...ranges,
    [prop]: newRange
  })

  const handleSubmit = () => {
    const query = {
      options,
      ranges
    }

    search(query)
  }

  const selectRoot = filters => {
    return filters.map(filter => {
      return (
        <Select
          key={filter.name}
          label={filter.label}
          name={filter.name}
          handleChange={handleChange}
          options={filter.options}
        />
      )
    })
  }

  return (
    <div>
      <label>
        <span>Height:</span>
        <InputRange
          minValue={40}
          maxValue={120}
          onChange={handleRangeChange('measurements.height')}
          value={ranges['measurements.height']}
        />
      </label>

      {selectRoot(filters)}

      <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default Filter
