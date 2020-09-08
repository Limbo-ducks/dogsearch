import React, { useState } from 'react'
import Slider from './Slider'
import filters from './Filters'
import './Filter.scss';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { map, maybe, pipe, prop } from '../../lib/helpers'
import FilterComponent from './FilterComponent';
import { makeStyles, withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// const GlobalCss = withStyles({
//   // @global is handled by jss-plugin-global.
//   '@global': {
//     // You should target [class*="MuiButton-root"] instead if you nest themes.
//     '.MuiInputLabel-root': {
//       transform: 'translate(14px, 14px) scale(1)',
//     },
//   },
// })(() => null);

// // …

// <GlobalCss />

const useStyles = makeStyles({
  root: {
    padding: 0,
    width: '48%',
    margin: '1.6% 0',
  },
  outlined: {
    transform: 'translate(14px, 14px) scale(1)',
  },
});

const theme = createMuiTheme({
  overrides: {
      MuiInputLabel: { // Name of the component ⚛️ / style sheet
          outlined: { // Name of the rule
              transform: 'translate(14px, 14px) scale(1);', // Some CSS
              'text-transform': 'capitalize',
          },
      },
  },
});

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
  const classes = useStyles();
  const [options, setOptions] = useState({})
  const [ranges, setRanges] = useState(initRanges)
  const [credit, setCredit] = useState(searchCredit ? [ searchCredit ] : [])
  const primary = [];
  const appearance = [];
  const skills = [];
  const experience = [];
  const measurements = [];
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
      // size="small"
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
      



  //   <section className="wrapper__picklists">
  //   <div className='personal'>
  //   {filters.map(filter => filter.type === 'select' && filter.class === 'personal'
  //     ?makeSelect(filter)
  //     :makeRange(filter))}
  //   </div>
  //   <div className='measurements'>
  //   {filters.map(filter => filter.type === 'select' && filter.class === 'measurements'
  //     ? makeSelect(filter)
  //     : makeRange(filter))}
  //   </div>
  // </section>

  return (
    <div className='flex flex-col'>
    {sortClasses()}
    <ThemeProvider theme={theme}>
      <FilterComponent 
        primary={primary} 
        appearance={appearance} 
        skills={skills} 
        experience={experience}
        measurements={measurements}
        handleSubmit={handleSubmit}
        searchCredit={searchCredit} 
        handleCreditChange={handleCreditChange}
        />
    </ThemeProvider>
    
    {/* <article className="searchengine">
    <h3>Filter Results</h3>
    
      <section className="wrapper__picklists"> */}
        
        
        {/* <ExperienceBox def={searchCredit} onChange={handleCreditChange} /> */}
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
      {/* </section> */}
    {/* </article> */}
    </div>
  )
}

export default Filter
