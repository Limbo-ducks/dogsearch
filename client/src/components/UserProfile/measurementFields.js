const makeHeightOption = (_, i) => {
  const height = 24 + i
  const feet = Math.floor(height / 12)
  const inches = height % 12

  return {
    value: height,
    text: `${feet}' ${inches}"`
  }
}

const makeWeightoption = (_, i) => {
  const value = 40 + 10 * i
  const text = value === 40
    ? '< 50 lbs'
    : value === 280
    ? '> 280 lbs'
    : `${value}-${value + 10} lbs`

  return { value, text }
}

const makeMeasuredOption = (start, end, { unit = '\'', step = 1 } = {}) => (_, i) => {
  const value = start + (step * (i - 1))
  const text = i === 0
    ? `< ${start}${unit}`
    : value > end
    ? `> ${end}${unit}`
    : `${value}${unit}`
  
  return { value, text }
}

const makeHatOption = (_, i) => [
  { value: `${6 + i}`, text: `${6 + i}` },
  { value: `${6 + i} 1/2`, text: `${6 + i} 1/2` },
  { value: `${6 + i} 1/4`, text: `${6 + i} 1/4` },
  { value: `${6 + i} 1/8`, text: `${6 + i} 1/8` },
  { value: `${6 + i} 3/8`, text: `${6 + i} 3/8` },
  { value: `${6 + i} 5/8`, text: `${6 + i} 5/8` },
]

const na = [{ value: 'n/a', text: 'N/A' }]

export default [{
  label: 'Height',
  name: 'measurements.height',
  type: 'autocomplete',
  multiple: false,
  options: Array.from({ length: 73 }, makeHeightOption)
}, {
  label: 'Weight',
  name: 'measurements.weight',
  type: 'autocomplete',
  multiple: false,
  options: Array.from({ length: 25 }, makeWeightoption)
}, {
  label: 'Body Type',
  name: 'measurements.bodyType',
  type: 'autocomplete',
  multiple: false,
  options: [
    { value: 'slender', text: 'Slender' },
    { value: 'very thin', text: 'Very Thin' },
    { value: 'average', text: 'Average' },
    { value: 'athletic', text: 'Athletic' },
    { value: 'husky', text: 'Husky' },
    { value: 'body builder', text: 'Body Builder' },
    { value: 'large', text: 'Large' },
    { value: 'n/a', text: 'N/A' },
  ]
}, {
  label: 'Shirt Size',
  name: 'measurements.shirtSize',
  type: 'autocomplete',
  multiple: false,
  options: [
    { value: 's', text: 'S' },
    { value: 'm', text: 'M' },
    { value: 'l', text: 'L' },
    { value: 'xl', text: 'XL' },
    { value: 'xxl', text: 'XXL' },
    { value: 'xxxl', text: 'XXXL' },
    { value: 'n/a', text: 'N/A' },
  ]
}, {
  label: 'Sleeve Length',
  name: 'measurements.sleeveLength',
  type: 'autocomplete',
  multiple: false,
  options: na.concat(Array.from({ length: 14 }, makeMeasuredOption(29, 40)))
}, {
  label: 'Neck',
  name: 'measurements.neck',
  type: 'autocomplete',
  multiple: false,
  options: na.concat(Array.from({ length: 34 }, makeMeasuredOption(12, 25, { step: 0.5 })))
}, {
  label: 'Jacket Chest',
  name: 'measurements.jacketChest',
  type: 'autocomplete',
  multiple: false,
  options: [
    na[0],
    { value: 32, text: '32' },
    { value: 34, text: '34' },
    { value: 36, text: '36' },
    { value: 37, text: '37' },
    { value: 38, text: '38' },
    { value: 39, text: '39' },
    { value: 40, text: '40' },
    { value: 41, text: '41' },
    { value: 42, text: '42' },
    { value: 44, text: '44' },
    { value: 46, text: '46' },
    { value: 48, text: '48' },
    { value: 50, text: '50' },
    { value: 52, text: '52' },
    { value: 54, text: '54' },
    { value: 56, text: '56' },
    { value: 58, text: '58' },
  ]
}, {
  label: 'Jacket Length',
  name: 'measurements.jacketLength',
  type: 'autocomplete',
  multiple: false,
  options: [
    { value: 's', text: 'S (small)' },
    { value: 'r', text: 'R (regular)' },
    { value: 'l', text: 'L (large)' },
  ]
}, {
  label: 'Waist',
  name: 'measurements.waist',
  type: 'autocomplete',
  multiple: false,
  options: na.concat(Array.from({ length: 43 }, makeMeasuredOption(18, 58)))
}, {
  label: 'Inseam',
  name: 'measurements.inseam',
  type: 'autocomplete',
  multiple: false,
  options: na.concat(Array.from({ length: 18 }, makeMeasuredOption(25, 40, { unit: '' })))
}, {
  label: 'Shoes Width',
  name: 'measurements.shoeWidth',
  type: 'autocomplete',
  multiple: false,
  options: [
    na[0],
    { value: 'a', text: 'A' },
    { value: 'aa', text: 'AA' },
    { value: 'aaa', text: 'AAA' },
    { value: 'b', text: 'B' },
    { value: 'd', text: 'D' },
    { value: 'e', text: 'E' },
    { value: 'ee', text: 'EE' },
    { value: 'eee', text: 'EEE' },
  ]
}, {
  label: 'Shoe Length',
  name: 'measurements.shoeLength',
  type: 'autocomplete',
  multiple: false,
  options: na.concat(Array.from({ length: 34 }, makeMeasuredOption(1, 17, { step: 0.5 })))
}, {
  label: 'Gloves',
  name: 'measurements.gloves',
  type: 'autocomplete',
  multiple: false,
  options: [
    na[0],
    { value: 'xsm', text: 'XSM' },
    { value: 'sm', text: 'SM' },
    { value: 'm', text: 'M' },
    { value: 'lg', text: 'LG' },
    { value: 'xlg', text: 'XLG' },
  ]
}, {
  label: 'Hat',
  name: 'measurements.hat',
  type: 'autocomplete',
  multiple: false,
  options: na.concat(Array.from({ length: 5 }, makeHatOption).flat()),
}, {
  label: 'Notes to Wardrobe',
  name: 'measurements.notes',
  type: 'text',
}]
