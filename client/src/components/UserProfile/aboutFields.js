const countryList = [
  { value: 'Denmark', text: 'Denmark' },
  { value: 'Finland', text: 'Finland' },
  { value: 'Norway', text: 'Norway' },
  { value: 'Sweden', text: 'Sweden' },
  { value: 'United Kingdom', text: 'United Kingdom' },
]

export default [{
  label: 'Profession',
  name: 'cast',
  type: 'autocomplete',
  multiple: false,
  required: true,
  options: [
    { value: 'actor', text: 'Actor' },
    { value: 'musician', text: 'Musician' },
    { value: 'voice over', text: 'Voice Over' },
    { value: 'songwriter', text: 'Song Writer' },
  ]
}, {
  label: 'Name',
  name: 'name',
  type: 'text',
  required: true,
}, {
  label: 'Short Biography',
  name: 'biography',
  type: 'text',
  multiline: true,
  required: false,
}, {
  label: 'Education',
  name: 'education',
  type: 'text',
  required: false,
}, {
  label: 'Training',
  name: 'training',
  type: 'text',
  required: false,
}, {
  label: 'Citizenship',
  name: 'citizenship',
  type: 'autocomplete',
  options: countryList,
  multiple: false,
  required: true,
}, {
  label: 'Passport',
  name: 'passport',
  type: 'autocomplete',
  options: countryList,
  multiple: false,
  required: true,
}, {
  label: 'Work Permit',
  name: 'workPermit',
  type: 'autocomplete',
  options: countryList,
  multiline: true,
  required: false,
}, {
  label: 'IMDb Profile',
  name: 'imdb',
  type: 'text',
  required: false,
}, {
  label: 'Birth Date',
  name: 'birthDate',
  type: 'text',
  required: true,
}]