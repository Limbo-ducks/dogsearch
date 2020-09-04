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
    input: false,
    type:'select'
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
    input: false,
    type:'select'
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
    input: false,
    type:'select'
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
    input: false,
    type:'select'
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
    input: false,
    type:'select'
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
    input: true,
    type:'select'
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
    input: true,
    type:'select'
  }, {
    label: 'Athletic Endeavors',
    name: 'athleticEndeavors',
    options: [
      { value: 'diving', text: 'Diving' },
      { value: 'tennis', text: 'Tennis' },
      { value: 'football', text: 'Football' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Performance',
    name: 'performance',
    options: [
      { value: 'comedian', text: 'Comedian' },
      { value: 'modeling', text: 'Modeling' }
    ],
    multiple: true,
    input: true,
    type:'select'
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
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Accents',
    name: 'accent',
    options: [
      { value: 'eastern eurpoean', text: 'Eastern European' },
      { value: 'russian', text: 'Russian' },
      { value: 'Finnish', text: 'Finnish' },
      { value: 'Swedish', text: 'Swedish' }
    ],
    multiple: true,
    input: true,
    type:'select'
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
    input: true,
    type:'select'
  }, {
    label: 'Disabilities',
    name: 'disabilities',
    options: [
      { value: 'autism', text: 'Autism' },
      { value: 'amputee', text: 'Amputee' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Body Modifications',
    name: 'bodyModifications',
    options: [
      { value: 'piercings', text: 'Piercings' },
      { value: 'tatoos', text: 'Tatoos' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Nudity',
    name: 'nudity',
    options: [
      { value: 'none', text: 'No Nudity'},
      { value: 'partial', text: 'Partial Nudity' },
      { value: 'full', text: 'Full Nudity' }
    ],
    multiple: true,
    input: true,
    type:'select'
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
    ],
    multiple: true,
    input: false,
    type:'select'
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
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Jacket length',
    name: 'measurements.jacketLength',
    options: [
      { value: 's', text: 'S' },
      { value: 'm', text: 'M' },
      { value: 'l', text: 'L' }
    ],
    type: 'select'
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
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Shoe Length',
    name: 'measurements.shoeLength',
    min: 1,
    max: 17,
    step:0.5,
    type: 'range'    
  }, {
    label: 'Gloves',
    name: 'measurements.gloves',
    options: [
      { value: 'xsm', text: 'XSM' },
      { value: 'sm', text: 'SM' },
      { value: 'm', text: 'M' },
      { value: 'lg', text: 'LG' },
      { value: 'xlg', text: 'XLG' }
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Height',
    name: 'measurements.height',
    min: 40,
    max: 120,
    type: 'range'    
  }, {
    label: 'Weight',
    name: 'measurements.weight',
    min: 50,
    max: 280,
    type: 'range'    
  }, {
    label: 'Sleeve Length',
    name: 'measurements.sleeveLength',
    min: 29,
    max: 40,
    type: 'range'    
  }, {
    label: 'Neck',
    name: 'measurements.neck',
    min: 12,
    max: 25,
    step:0.5,
    type: 'range'    
  }, {
    label: 'Jacket Chest',
    name: 'measurements.jacketChest',
    min: 32,
    max: 58,
    type: 'range'    
  }, {
    label: 'Waist',
    name: 'measurements.waist',
    min: 18,
    max: 58,
    type: 'range'    
  }, {
    label: 'Inseam',
    name: 'measurements.inseam',
    min: 25,
    max: 40,
    type: 'range'    
  }, {
    label: 'Social Media',
    name: 'socialMedia.name',
    options: [
      { value: 'facebook', text: 'Facebook' },
      { value: 'instagram', text: 'Instagram' },
      { value: 'twitter', text: 'Twitter' }
    ],
    multiple: true,
    input: false,
    type:'select'
  }
]

export default filters
