export default [{
  label: 'Union Status',
  name: 'unionStatus',
  type: 'text',
}, {
  label: 'Union Membership Number',
  name: 'unionNumber',
  type: 'text',
}, {
  label: 'Willing to Work Non-Union',
  name: 'willingNonUnion',
  type: 'autocomplete',
  multiple: false,
  required: true,
  options: [
    { value: 'yes', text: 'Yes' },
    { value: 'no', text: 'No' },
  ]
}]
