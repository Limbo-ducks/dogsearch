const filters = [
  {
    label: 'Gender',
    name: 'gender',
    class: 'primary',
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
    label: 'Profession',
    name: 'cast',
    class: 'primary',
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
    label: 'Acting Age',
    unit: "",
    name: 'age',
    class: 'primary',
    min: 5,
    max: 100,
    type: 'range'    
  }, {
    label: 'Body type',
    name: 'measurements.bodyType',
    class: 'appearance',
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
    label: 'Nudity',
    name: 'nudity',
    class: 'appearance',
    options: [
      { value: 'none', text: 'No Nudity'},
      { value: 'partial', text: 'Partial Nudity' },
      { value: 'full', text: 'Full Nudity' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Ethnic Appearance',
    name: 'ethnicity',
    class: 'appearance',
    options: [
      { value: 'african', text: 'African' },
      { value: 'black/african american', text: 'Black/African American' },
      { value: 'caucassian', text: 'Caucassian' },
      { value: 'east asian', text: 'East Asian' },
      { value: 'eastern european', text: 'Eastern European' },
      { value: 'filipino', text: 'Filipino' },
      { value: 'hispanic', text: 'Hispanic' },
      { value: 'mediterranean', text: 'Mediterranean' },
      { value: 'middle eastern', text: 'Middle Eastern' },
      { value: 'mixed ethnicity', text: 'Mixed Ethnicity' },
      { value: 'native american indian', text: 'Native American Indian' },
      { value: 'north african', text: 'North African' },
      { value: 'pacifist islander', text: 'Pacifist Islander' },
      { value: 'south asian', text: 'South Asian' },
      { value: 'southeast asian', text: 'Southeast Asian' },
      { value: 'west indies/carbibbean', text: 'West Indies/Carbibbean' },
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Body Modifications',
    name: 'bodyModifications',
    class: 'appearance',
    options: [
      { value: 'piercings', text: 'Piercings' },
      { value: 'tatoos', text: 'Tatoos' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Hair color',
    name: 'hairColor',
    class: 'appearance',
    options: [
      { value: 'auburn', text: 'Auburn' },
      { value: 'bald', text: 'Bald' },
      { value: 'black', text: 'Black' },
      { value: 'blonde', text: 'Blonde' },
      { value: 'blue', text: 'Blue' },
      { value: 'brown', text: 'Brown' },
      { value: 'grey', text: 'Grey' },
      { value: 'honey brown', text: 'Honey Brown' },
      { value: 'multi-colored', text: 'Multi-Colored' },
      { value: 'red', text: 'Red' },
      { value: 'salt and pepper', text: 'Salt and Pepper' },
      { value: 'silver', text: 'Silver' },
      { value: 'strawberry blond', text: 'Strawberry Blond' },
      { value: 'white', text: 'White' },
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Hair Length',
    name: 'hairLength',
    class: 'appearance',
    options: [
      { value: 'afro', text: 'Afro' },
      { value: 'bald (total)', text: 'Bald (total)' },
      { value: 'bald (on top)', text: 'Bald (on top)' },
      { value: 'buzzcut', text: 'Buzzcut' },
      { value: 'chin length', text: 'Chin length' },
      { value: 'cornrows', text: 'Cornrows' },
      { value: 'dreadlocks', text: 'Dreadlocks' },
      { value: 'long', text: 'Long' },
      { value: 'mullet', text: 'Mullet' },
      { value: 'receding', text: 'Receding' },
      { value: 'shaved', text: 'Shaved' },
      { value: 'short', text: 'Short' },
      { value: 'shoulder length', text: 'Shoulder length' },
      { value: 'spiky', text: 'Spiky' },
      { value: 'undercut', text: 'Undercut' },
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Eye color',
    name: 'eyeColor',
    class: 'appearance',
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
    label: 'Filmmakers',
    name: 'filmmakers',
    class: 'experience',
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
    class: 'skills',
    options: [
      { value: 'diving', text: 'Diving' },
      { value: 'tennis', text: 'Tennis' },
      { value: 'football', text: 'Football' },
      { value: 'combat - stage', text: 'Combat - stage' },
      { value: 'martial arts', text: 'Martial Arts' },
      { value: 'horseback riding', text: 'Horseback riding' },
      { value: 'weapons handling', text: 'Weapons handling' },
      { value: 'knife fighting', text: 'Knife fighting' },
      { value: 'karate', text: 'Karate' },
      { value: 'sailing', text: 'Sailing' },
      { value: 'skiing', text: 'Skiing' },
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Performance',
    name: 'performance',
    class: 'experience',
    options: [
      { value: 'comedian', text: 'Comedian' },
      { value: 'modeling', text: 'Modeling' },
      { value: 'licensed driver', text: 'Licensed Driver' },
      { value: 'dancing', text: 'Dancing' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Active years in profession',
    name: 'professionYears',
    class: 'primary',
    options: [
      { value: 0, text: '< 1' },
      { value: 1, text: '1 year' },
      { value: 2, text: '2 years' },
      { value: 3, text: '3 years' },
      { value: 4, text: '4 years' },
      { value: 5, text: '5 years' },
      { value: 6, text: '6 years' },
      { value: 7, text: '7 years' },
      { value: 8, text: '8 years' },
      { value: 9, text: '9 years' },
      { value: 10, text: '10 <' }
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Accents',
    name: 'accent',
    class: 'skills',
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
    class: 'skills',
    options: [
      { value: 'english', text: 'English' },
      { value: 'swedish', text: 'Swedish' },
      { value: 'german', text: 'German' },
      { value: 'spanish', text: 'Spanish' },
      { value: 'danish', text: 'Danish' },
      { value: 'norwegian', text: 'Norwegian' },
      { value: 'albanian', text: 'Albanian' },
      { value: 'serbian', text: 'Serbian' },
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Disabilities',
    name: 'disabilities',
    class: 'skills',
    options: [
      { value: 'autism', text: 'Autism' },
      { value: 'amputee', text: 'Amputee' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, 
  // Measurements
  {
    label: 'Shirt size',
    name: 'measurements.shirtSize',
    class: 'measurements',
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
    class: 'measurements',
    options: [
      { value: 's', text: 'S' },
      { value: 'm', text: 'M' },
      { value: 'l', text: 'L' }
    ],
    type: 'select'
  }, {
    label: 'Shoe width',
    name: 'measurements.shoeWidth',
    class: 'measurements',
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
    label: 'Gloves',
    name: 'measurements.gloves',
    class: 'measurements',
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
    label: 'Shoe Length',
    unit: "'",
    name: 'measurements.shoeLength',
    class: 'measurements',
    min: 1,
    max: 17,
    step:0.5,
    type: 'range'    
  }, {
    label: 'Height',
    unit: "'",
    name: 'measurements.height',
    class: 'measurements',
    min: 23,
    max: 100,
    type: 'range'    
  }, {
    label: 'Weight',
    unit: 'lbs',
    name: 'measurements.weight',
    class: 'measurements',
    min: 40,
    max: 290,
    type: 'range'    
  }, {
    label: 'Sleeve Length',
    unit: "'",
    name: 'measurements.sleeveLength',
    class: 'measurements',
    min: 28,
    max: 41,
    type: 'range'    
  }, {
    label: 'Neck',
    unit: "'",
    name: 'measurements.neck',
    class: 'measurements',
    min: 11,
    max: 26,
    step:0.5,
    type: 'range'    
  }, {
    label: 'Jacket Chest',
    unit: "'",
    name: 'measurements.jacketChest',
    class: 'measurements',
    min: 32,
    max: 58,
    type: 'range'    
  }, {
    label: 'Waist',
    unit: "'",
    name: 'measurements.waist',
    class: 'measurements',
    min: 17,
    max: 59,
    type: 'range'    
  }, {
    label: 'Inseam',
    unit: "'",
    name: 'measurements.inseam',
    class: 'measurements',
    min: 24,
    max: 41,
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
