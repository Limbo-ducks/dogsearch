import React, { useState, useEffect } from 'react'
import Slider from './Slider'
import filters from './Filters'
import './Filter.scss';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { map, maybe, pipe, prop } from '../../lib/helpers'
import FilterComponent from './FilterComponent';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: 0,
    width: '48%',
    margin: '1.6% 0',
    3: {
      "max-width": "100%",
    }
  },
  outlined: {
    transform: 'translate(14px, 14px) scale(1)',
  },
});

const theme = createMuiTheme({
  overrides: {
      MuiInputLabel: { 
          outlined: {
              transform: 'translate(14px, 14px) scale(1);', 
              'text-transform': 'capitalize',
          },
      },
  },
});

const initRanges = {
  'age': [0, 20]
}

const parseValue = map(prop('value'))

const getValue = pipe(
  parseValue,
  maybe(x => x.length > 0 || typeof x === 'number')
)

const Filter = ({ search, searchBreed }) => {
  const classes = useStyles();
  const [options, setOptions] = useState({})
  const [ranges, setRanges] = useState(initRanges)
  const [breed, setBreed] = useState(searchBreed ? [ searchBreed ] : [])
  
  const primary = [];
  const appearance = [];
  const skills = [];
  const experience = [];
  const measurements = [];

  useEffect(() => {
    if (searchBreed) handleSubmit()
  }, [])

  const handleBreedChange = (_, value) => pipe(
    parseValue,
    setBreed
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
      breed,
      options,
      ranges
    }
    window.scrollTo(0,0)
    search(query)
  }

  const makeSelect = filter => (
    <Autocomplete
      className={`picklist ${filter.class} ${filter.name} `}
      key={filter.name}
      id={filter.name}
      options={filter.options}
      onChange={handleOptionsChange(filter.name)}
      getOptionLabel={(option) => option.text}
      multiple={filter.multiple}
      disableCloseOnSelect={filter.multiple ? true : false}
      classes={{
        root: classes.root,
      }}
      
      renderInput={(params) => <TextField {...params} label={filter.label} variant="outlined" classes={{outlined: classes.outlined}}/>}
    />
  )

  const makeRange = filter => (
    <Slider
      label={filter.label + 
      ` (${filter.unit ? filter.min +''+ filter.unit : filter.min} - 
        ${filter.unit ? filter.max +''+ filter.unit : filter.max})`}
      key={filter.name}
      name={filter.name}
      className={`${filter.class} w-1/2 ${filter.name}`}
      value={ranges[filter.name]}
      onChange={handleRangeChange(filter.name)}
      min={filter.min}
      max={filter.max}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      step={filter.step}
    />
  )
  
  const sortClasses = () => {
    filters.forEach(filter => {
      if(filter.class === 'primary') {
        primary.push(selectRoot(filter));
      } else if(filter.class === 'appearance') {
          appearance.push(selectRoot(filter));
      } else if(filter.class === 'skills') {
          skills.push(selectRoot(filter));
      } else if(filter.class === 'experience') {
          experience.push(selectRoot(filter));
      } else {
        measurements.push(selectRoot(filter));
      }
    })
  }

  const selectRoot = filter => {
    return filter.type === 'select'? makeSelect(filter) : makeRange(filter);
  }

  return (
    <div className='flex flex-col'>
    {sortClasses()}
    <ThemeProvider theme={theme}>
      <section className="filterwrapper">
        <FilterComponent 
          primary={primary} 
          appearance={appearance} 
          skills={skills} 
          experience={experience}
          measurements={measurements}
          handleSubmit={handleSubmit}
          searchBreed={searchBreed} 
          handleBreedChange={handleBreedChange}
          />
        </section>
    </ThemeProvider>
    </div>
  )
}

export default Filter
