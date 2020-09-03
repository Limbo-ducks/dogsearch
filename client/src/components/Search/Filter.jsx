import React, { useState } from 'react'
import { MenuItem } from '@material-ui/core'
import MultipleSelect from './MultipleSelect'
import RangeFields from './RangeFields'
import Slider from './Slider'
import filters from './Filters'
import './Filter.scss';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


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

  const makeSelect = filter => (
    <Autocomplete
      className="picklist"
      key={filter.name}
      id={filter.name}
      options={filter.options}
      // onChange={handleOptionsChange(filter.name)}
      getOptionLabel={(option) => option.text}
      multiple={filter.multiple}
      renderInput={(params) => <TextField {...params} label={filter.label} variant="outlined" />}
    />
    // <MultipleSelect
    //   key={filter.name}
    //   id={filter.name}
    //   label={filter.label}
    //   onChange={handleOptionsChange(filter.name)}
    //   multiple={filter.multiple}
    //   input={filter.input}
    // >
    //   {!filter.multiple ? <MenuItem value=''><em>None</em></MenuItem> : null}
    //   {filter.options.map(({ value, text }) => <MenuItem key={value} value={value}>{text}</MenuItem>)}
    // </MultipleSelect>
  )

  const makeRange = filter => (
    <Slider
      label={filter.label}
      name={filter.name}
      value={ranges[filter.name]}
      onChange={handleRangeChange(filter.name)}
      min={filter.min}
      max={filter.max}
      step={filter.step}
    />
  )

  const selectRoot = filters => (
    <section className="wrapper__picklists">
      {filters.map(filter => filter.type === 'select'
        ? makeSelect(filter)
        : makeRange(filter))}
    </section>
  )

  return (
    <>
    <h1>Browse Talent Profiles</h1>
    <article className="searchengine">

      {selectRoot(filters)}

      <button onClick={handleSubmit} className="searchengine__button">Search</button>
    </article>
    </>
  )
}

export default Filter
