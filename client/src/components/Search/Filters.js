const filters = [
  {
    label: 'Gender',
    name: 'gender',
    options: [
      { value: 'female', text: 'Female' },
      { value: 'male', text: 'Male' },
      { value: 'transgender', text: 'Transgender/Non-Binary' },
      { value: 'twins', text: 'Twins/Multiples' }
    ],
    multiple: false,
    input: false
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
    ],
    multiple: false,
    input: false
  }, {
    label: 'Hair color',
    name: 'hairColor',
    options: [
      { value: 'black', text: 'Black' },
      { value: 'blonde', text: 'Blonde' },
      { value: 'brown', text: 'Brown' },
      { value: 'grey', text: 'Grey' },
      { value: 'red', text: 'Red' }
    ],
    multiple: false,
    input: false
  }, {
    label: 'Hair Length',
    name: 'hairLength',
    options: [
      { value: 'afro', text: 'Afro' },
      { value: 'bald', text: 'Bald' },
      { value: 'dreadlocks', text: 'Dreadlocks' },
      { value: 'long', text: 'Long' },
      { value: 'short', text: 'Short' }
    ],
    multiple: false,
    input: false
  }, {
    label: 'Ethnic Appearance',
    name: 'ethnicity',
    options: [
      { value: 'african', text: 'African' },
      { value: 'caucassian', text: 'Caucassian' },
      { value: 'east asian', text: 'East Asian' },
      { value: 'hispanic', text: 'Hispanic' }
    ],
    multiple: false,
    input: false
  }, {
    label: 'Cast',
    name: 'cast',
    options: [
      { value: 'actor', text: 'Actor' },
      { value: 'stunt actor', text: 'Stunt Actor' },
      { value: 'dj', text: 'DJ' },
      { value: 'singer', text: 'Singer' },
      { value: 'painter', text: 'Painter' },
      { value: 'model', text: 'Model' }
    ],
    multiple: false,
    input: true
  }, {
    label: 'Filmmakers',
    name: 'filmmakers',
    options: [
      { value: 'director', text: 'Director' },
      { value: 'producer', text: 'Producer' },
      { value: 'cinematographer', text: 'Cinematographer' },
      { value: 'film editor', text: 'Film editor' },
      { value: 'graphic artist', text: 'Graphic artist' },
      { value: 'composer', text: 'Composer' }
    ],
    multiple: true,
    input: true
  }, {
    label: 'Athletic Endeavors',
    name: 'athleticEndeavors',
    options: [
      { value: 'diving', text: 'Diving' },
      { value: 'tennis', text: 'Tennis' },
      { value: 'football', text: 'Football' }
    ],
    multiple: true,
    input: true
  }, {
    label: 'Performance',
    name: 'performance',
    options: [
      { value: 'comedian', text: 'Comedian' },
      { value: 'modeling', text: 'Modeling' }
    ],
    multiple: true,
    input: true
  }, {
    label: 'Active years in profession',
    name: 'professionYears',
    options: [
      { value: '0', text: '< 1' },
      { value: '1', text: '1 year' },
      { value: '2', text: '2 years' },
      { value: '3', text: '3 years' },
      { value: '4', text: '4 years' },
      { value: '5', text: '5 years' },
      { value: '6', text: '6 years' },
      { value: '7', text: '7 years' },
      { value: '8', text: '8 years' },
      { value: '9', text: '9 years' },
      { value: '10', text: '10 <' }
    ]
  }, {
    label: 'Accent',
    name: 'accent',
    options: [
      { value: 'eastern eurpoean', text: 'Eastern European' },
      { value: 'russian', text: 'Russian' },
      { value: 'Finnish', text: 'Finnish' },
      { value: 'Swedish', text: 'Swedish' }
    ],
    multiple: true,
    input: true
  }, {
    label: 'Languages',
    name: 'languages',
    options: [
      { value: 'english', text: 'English' },
      { value: 'swedish', text: 'Swedish' },
      { value: 'german', text: 'German' },
      { value: 'spanish', text: 'Spanish' }
    ],
    multiple: true,
    input: true
  }, {
    label: 'Disabilities',
    name: 'disabilities',
    options: [
      { value: 'autism', text: 'Autism' },
      { value: 'amputee', text: 'Amputee' }
    ],
    multiple: true,
    input: true
  }, {
    label: 'Body Modifications',
    name: 'bodyModifications',
    options: [
      { value: 'piercings', text: 'Piercings' },
      { value: 'tatoos', text: 'Tatoos' }
    ]
  }, {
    label: 'Nudity',
    name: 'nudity',
    options: [
      { value: 'partial', text: 'Partial Nudity' },
      { value: 'full', text: 'Full Nudity' }
    ]
  },
  // Measurements
  {
    label: 'Body type',
    name: 'measurements.bodyType',
    options: [
      { value: 'slender', text: 'Slender' },
      { value: 'very thin', text: 'Very thin' },
      { value: 'average', text: 'Average' },
      { value: 'athletic', text: 'Athletic' },
      { value: 'husky', text: 'Husky' },
      { value: 'body builder', text: 'Body builder' },
      { value: 'large', text: 'Large' },
      { value: 'n/a', text: 'n/a' }
    ]
  }, {
    label: 'Shirt size',
    name: 'measurements.shirtSize',
    options: [
      { value: 's', text: 'S' },
      { value: 'm', text: 'M' },
      { value: 'l', text: 'L' },
      { value: 'xl', text: 'XL' },
      { value: 'xxl', text: 'XXL' },
      { value: 'xxxl', text: 'XXXL' },
      { value: 'n/a', text: 'n/a' }
    ]
  }, {
    label: 'Jacket length',
    name: 'measurements.jacketLength',
    options: [
      { value: 's', text: 'S' },
      { value: 'm', text: 'M' },
      { value: 'l', text: 'L' }
    ]
  }, {
    label: 'Shoe width',
    name: 'measurements.shoeWidth',
    options: [
      { value: 'a', text: 'A' },
      { value: 'aa', text: 'AA' },
      { value: 'aaa', text: 'AAA' },
      { value: 'b', text: 'B' },
      { value: 'd', text: 'D' },
      { value: 'e', text: 'E' },
      { value: 'ee', text: 'EE' },
      { value: 'eee', text: 'EEE' }
    ]
  }, {
    label: 'Gloves',
    name: 'measurements.gloves',
    options: [
      { value: 'xsm', text: 'XSM' },
      { value: 'sm', text: 'SM' },
      { value: 'm', text: 'M' },
      { value: 'lg', text: 'LG' },
      { value: 'xlg', text: 'XLG' }
    ]
  }
]

export default filters

/*
{
    label: '',
    name: '',
    options: [
      { value: '', text:'' },
      { value: '', text:'' },
      { value: '', text:'' },
      { value: '', text:'' },
      { value: '', text:'' },
      { value: '', text:'' }
    ]
  }
*/
