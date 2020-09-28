const filters = [
  {
    label: 'Gender',
    name: 'gender',
    class: 'primary',
    options: [
      { value: 'female', text: 'Female' },
      { value: 'male', text: 'Male' },
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Breed',
    name: 'breed',
    class: 'primary',
    options: [
      { value: 'beagle', text: 'Beagle' },
      { value: 'goldenRetriever', text: 'Golden Retriever' },
      { value: 'labrador', text: 'Labrador' },
      { value: 'pug', text: 'Pug' },
      { value: 'daschhound', text: 'Daschhound' },
      { value: 'germanShepherd', text: 'German Shepherd' },
      { value: 'corgi', text: 'Corgi' },
    ],
    multiple: false,
    input: true,
    type:'select'
  }, {
    label: 'Age',
    unit: "",
    name: 'age',
    class: 'primary',
    min: 0,
    max: 20,
    type: 'range'    
  }, {
    label: 'Size',
    name: 'size',
    class: 'appearance',
    options: [
      { value: 'small', text: 'Small' },
      { value: 'medium', text: 'Medium' },
      { value: 'large', text: 'Large' },
      { value: 'veryLarge', text: 'Very Large' },
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Color',
    name: 'color',
    class: 'appearance',
    options: [
      { value: 'black', text: 'Black' },
      { value: 'blonde', text: 'Blonde' },
      { value: 'spotted', text: 'Spotted' },
      { value: 'brown', text: 'Brown' },
      { value: 'grey', text: 'Grey' },
      { value: 'red', text: 'Red' },
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Fur',
    name: 'fur',
    class: 'appearance',
    options: [
      { value: 'short', text: 'Short' },
      { value: 'medium', text: 'Medium' },
      { value: 'long', text: 'Long' },
    ],
    multiple: false,
    input: false,
    type:'select'
  }, 
]

export default filters
