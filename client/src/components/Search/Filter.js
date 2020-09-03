import React, { useState } from 'react'
import { MenuItem } from '@material-ui/core'
import MultipleSelect from './MultipleSelect'
import RangeFields from './RangeFields'
import filters from './Filters'

const initRanges = {
  'measurements.height': [40, 120],
  'measurements.weight': [50, 280],
  'measurements.sleeveLength': [29, 40],
  'measurements.neck': [12.0, 25.0],
  'measurements.jacketChest': [32, 58],
  'measurements.waist': [18, 58],
  'measurements.inseam': [25, 40],
  'measurements.shoeLength': [1.0, 17.0]
}

const Filter = ({ search }) => {
  const [options, setOptions] = useState({})
  const [ranges, setRanges] = useState(initRanges)

  const handleOptionsChange = prop => e => {
    setOptions({
      ...options,
      [prop]: e.target.value.length !== 0 ? e.target.value : undefined
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
            {!filter.multiple ? <MenuItem value=''><em>None</em></MenuItem> : null}
            {filter.options.map(({ value, text }) => <MenuItem key={value} value={value}>{text}</MenuItem>)}
          </MultipleSelect>
        )
      })}
    </section>
  )

  return (
    <div>
      {selectRoot(filters)}
      <RangeFields ranges={ranges} handleRangeChange={handleRangeChange} />
      <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default Filter
