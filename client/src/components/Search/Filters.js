const filters = [
  {
    label: 'Gender',
    name: 'gender',
    options: [
      { value: 'female', text: 'Female' },
      { value: 'male', text: 'Male' },
      { value: 'transgender', text: 'Transgender/Non-Binary' },
      { value: 'twins', text: 'Twins/Multiples' }
    ]
  }, {
    label: 'Eye color',
    name: 'eyeColor',
    options: [
      { value: 'blue', text: 'Blue' },
      { value: 'brown', text: 'Brown' },
      { value: 'green', text: 'Green' },
      { value: 'black', text: 'Black' },
      { value: 'grey', text: 'Grey' },
      { value: 'hazel', text: 'Hazel' }
    ]
  }, {
    label: 'Hair color',
    name: 'hairColor',
    options: [
      { value: 'black', text: 'Black' },
      { value: 'blonde', text: 'Blonde' },
      { value: 'brown', text: 'Brown' },
      { value: 'grey', text: 'Grey' },
      { value: 'red', text: 'Red' }
    ]
  }, {
    label: 'Hair Length',
    name: 'hairLength',
    options: [
      { value: 'afro', text: 'Afro' },
      { value: 'bald', text: 'Bald' },
      { value: 'dreadlocks', text: 'Dreadlocks' },
      { value: 'long', text: 'Long' },
      { value: 'short', text: 'Short' }
    ]
  }, {
    label: 'Ethnic Appearance',
    name: 'ethnicity',
    options: [
      { value: 'african', text: 'African' },
      { value: 'caucassian', text: 'Caucassian' },
      { value: 'east asian', text: 'East Asian' },
      { value: 'hispanic', text: 'Hispanic' }
    ]
  }, {
    label: 'Cast',
    name: 'cast',
    options: [
      { value: 'actor' },
      { value: 'stunt actor' },
      { value: 'dj' },
      { value: 'singer' },
      { value: 'painter' },
      { value: 'model' }
    ]
  }
]

export default filters
