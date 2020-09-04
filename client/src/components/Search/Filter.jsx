import React, { useState } from 'react'
import ExperienceBox from './ExperienceBox'
import Slider from './Slider'
import filters from './Filters'
import './Filter.scss';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { map, maybe, pipe, prop } from '../../lib/helpers'


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

const parseValue = map(prop('value'))

const getValue = pipe(
  parseValue,
  maybe(x => x.length > 0)
)

const Filter = ({ search, searchCredit }) => {
  const [options, setOptions] = useState({})
  const [ranges, setRanges] = useState(initRanges)
  const [credit, setCredit] = useState(searchCredit ? [ searchCredit ] : [])

  const handleCreditChange = (_, value) => pipe(
    parseValue,
    setCredit
  )(value)

  const handleOptionsChange = prop => (_, value) => {
    const newValue = value
      ? getValue(value)
      : undefined

    setOptions({
      ...options,
      [prop]: newValue
    })
  }

  const handleRangeChange = prop => (_, newRange) => setRanges({
    ...ranges,
    [prop]: newRange
  })

  const handleSubmit = () => {
    const query = {
      credit,
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
      onChange={handleOptionsChange(filter.name)}
      getOptionLabel={(option) => option.text}
      multiple={filter.multiple}
      renderInput={(params) => <TextField {...params} label={filter.label} variant="outlined" />}
    />
  )

  const makeRange = filter => (
    <Slider
      label={filter.label}
      key={filter.name}
      name={filter.name}
      value={ranges[filter.name]}
      onChange={handleRangeChange(filter.name)}
      min={filter.min}
      max={filter.max}
      step={filter.step}
    />
  )

  const selectRoot = filters =>
    filters.map(filter => filter.type === 'select'
      ? makeSelect(filter)
      : makeRange(filter))

  return (
    <>
    <h1>Browse Talent Profiles</h1>
    <article className="searchengine">

      <section className="wrapper__picklists">
        {selectRoot(filters)}
        <ExperienceBox def={searchCredit} onChange={handleCreditChange} />
        {/* <Autocomplete
          className="picklist"
          id='credit'
          defaultValue={}
          options={[
            { value: 'films', text: 'Film' },
            { value: 'theatre', text: 'Theatre' },
            { value: 'tv', text: 'TV' },
            { value: 'modelin', text: 'Modeling' }
          ]}
          onChange={handleCreditChange}
          getOptionLabel={(option) => option.text}
          multiple={true}
          renderInput={(params) => <TextField {...params} label={'Experience in'} variant="outlined" />}
        /> */}
      </section>

      <button onClick={handleSubmit} className="searchengine__button">Search</button>
    </article>
    </>
  )
}

export default Filter
