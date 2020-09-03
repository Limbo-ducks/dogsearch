import React, { useState } from 'react'
import { MenuItem } from '@material-ui/core'
import MultipleSelect from './MultipleSelect'
import Slider from './Slider'
import filters from './Filters'

const initRanges = {
  'measurements.height': [ 40, 120 ],
  'measurements.weight': [ 50, 280 ]
}

const Filter = ({ search }) => {
  const [options, setOptions] = useState({})
  const [ranges, setRanges] = useState(initRanges)

  const handleOptionsChange = prop => e => {
    setOptions({
      ...options,
      [prop]: e.target.value || undefined
    })
  }

  const handleRangeChange = prop => (_, newRange) => setRanges({
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

  const selectRoot = filters => (
    <section>
      {filters.map(filter => {
        return (
          <MultipleSelect
            key={filter.name}
            id={filter.name}
            label={filter.label}
            onChange={handleOptionsChange(filter.name)}
            multiple={filter.multiple}
            input={filter.input}
          >
            {filter.multiple || <MenuItem value=''><em>None</em></MenuItem>}
            {filter.options.map(({ value, text }) => <MenuItem value={value}>{text}</MenuItem>)}
          </MultipleSelect>
        )
      })}
    </section>
  )

  return (
    <div>
      <Slider
        label='Height:'
        value={ranges['measurements.height']}
        onChange={handleRangeChange('measurements.height')}
        min={40}
        max={120}
      />
      <Slider
        label='Weight:'
        value={ranges['measurements.weight']}
        onChange={handleRangeChange('measurements.weight')}
        min={50}
        max={280}
      />

      {selectRoot(filters)}

      <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default Filter
