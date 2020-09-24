export default [{
    label: 'Resumé',
    name: 'resume',
    type: 'text',
    multiline: true,
}, {
    label: 'Years in Profession',
    name: 'professionYears',
    type: 'autocomplete',
    multiple: false,
    required: true,
    options: [
        { value: 0, text: '< 1 year' },
        { value: 1, text: '1 year' },
        { value: 2, text: '2 years' },
        { value: 3, text: '3 years' },
        { value: 4, text: '4 years' },
        { value: 5, text: '5 years' },
        { value: 6, text: '6 years' },
        { value: 7, text: '7 years' },
        { value: 8, text: '8 years' },
        { value: 9, text: '9 years' },
        { value: 10, text: '10 years' },
        { value: 11, text: '> 10 years' },
    ]
}]
