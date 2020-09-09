const countryList = [
  { value: 'Denmark', text: 'Denmark' },
  { value: 'Finland', text: 'Finland' },
  { value: 'Norway', text: 'Norway' },
  { value: 'Sweden', text: 'Sweden' },
  { value: 'United Kingdom', text: 'United Kingdom' },
]

export default [{
  label: 'Name',
  name: 'name',
  type: 'text',
}, {
  label: 'Short Biography',
  name: 'biography',
  type: 'text',
  multiline: true,
}, {
  label: 'Education',
  name: 'education',
  type: 'text',
}, {
  label: 'Training',
  name: 'training',
  type: 'text',
}, {
  label: 'Citizenship',
  name: 'citizenship',
  type: 'autocomplete',
  options: countryList,
  multiple: false,
}, {
  label: 'Passport',
  name: 'passport',
  type: 'autocomplete',
  options: countryList,
  multiple: false,
}, {
  label: 'Work Permit',
  name: 'workPermit',
  type: 'autocomplete',
  options: countryList,
  multiline: true,
}, {
  label: 'IMDb Profile',
  name: 'imdb',
  type: 'text',
}, {
  label: 'Birth Date',
  name: 'birthDate',
  type: 'text',
}]