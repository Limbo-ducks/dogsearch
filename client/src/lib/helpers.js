import * as R from 'ramda'

const pipe = (...fns) => val => fns.reduce((x, fn) => fn(x), val)

const prop = key => obj => obj[key]

const maybe = pred => x => pred(x) ? x : undefined

const map = fn => xs => Array.isArray(xs)
  ? xs.map(fn)
  : fn(xs)

const capitalise = str => str[0].toUpperCase() + str.slice(1)
const spaciate = str => str.replace(/([a-z])([A-Z])/, (_, a, b) => `${a} ${b}`)

const getAutocompleteValue = (options, value) => 
  Array.isArray(value)
    ? value.map(value => R.defaultTo(null, options.find(x => x.value === value)))
    : R.is(Object, value)
    ? value
    : R.defaultTo(null, options.find(x => x.value === value))

export {
  capitalise,
  getAutocompleteValue,
  map,
  maybe,
  pipe,
  prop,
  spaciate,
}