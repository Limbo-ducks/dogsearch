import React, { useState } from 'react'
import Availability from './Availability'
import ExperienceBox from './ExperienceBox'
import Slider from './Slider'
import filters from './Filters'
import './Filter.scss';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { map, maybe, pipe, prop } from '../../lib/helpers'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const initRanges = {
  'age': [5, 100],
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
  const [dates, setDates] = useState({})

  const handleCreditChange = (_, value) => pipe(
    parseValue,
    setCredit
  )(value)

  const handleDatesChange = prop => event => {
    setDates({
      ...dates,
      [prop]: event.target.value || undefined
    })
  }

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
      dates,
      options,
      ranges
    }

    search(query)
  }

  const makeSelect = filter => (
    <Autocomplete
      className={`picklist ${filter.class === 'measurements' ? 'measurements' : ''}`}
      key={filter.name}
      id={filter.name}
      options={filter.options}
      onChange={handleOptionsChange(filter.name)}
      getOptionLabel={(option) => option.text}
      multiple={filter.multiple}
      disableCloseOnSelect={filter.multiple ? true : false}
      // renderOption={(option, { selected }) => (
      //   <React.Fragment>
      //     <Checkbox
      //       icon={icon}
      //       checkedIcon={checkedIcon}
      //       style={{ marginRight: 8 }}
      //       checked={selected}
      //     />
      //     {option.text}
      //   </React.Fragment>
      // )}
      size="small"
      renderInput={(params) => <TextField {...params} label={filter.label} variant="outlined"/>}
    />
  )

  const makeRange = filter => (
    <Slider
      label={filter.label + 
      ` (${filter.unit ? filter.min +''+ filter.unit : filter.min} - 
        ${filter.unit ? filter.max +''+ filter.unit : filter.max})`}
      key={filter.name}
      name={filter.name}
      className={`${filter.class === 'measurements' ? 'measurements' : ''}`}
      value={ranges[filter.name]}
      onChange={handleRangeChange(filter.name)}
      min={filter.min}
      max={filter.max}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      step={filter.step}
    />
  )

  const selectRoot = filters => (
    <>
      <div className='personal'>
      {filters.map(filter => filter.type === 'select'
        ? filter.class === 'personal' ? makeSelect(filter) : null
        : filter.class === 'personal' ? makeRange(filter) : null)}
      </div>
      <div className='measurements'>
      {filters.map(filter => filter.type === 'select'
        ? filter.class === 'measurements' ? makeSelect(filter) : null
        : filter.class === 'measurements' ? makeRange(filter) : null)}
      </div>
    </>
  )

  return (
    <>
    <h1>Browse Talent Profiles</h1>
    <article className="searchengine">
    <h3>Filter Results</h3>

      <section className="wrapper__picklists">
        <Availability onChange={handleDatesChange} />
        <ExperienceBox def={searchCredit} onChange={handleCreditChange} />
        {selectRoot(filters)}
      </section>

      <button onClick={handleSubmit} className="searchengine__button">Search</button>
    </article>
    </>
  )
}

export default Filter
