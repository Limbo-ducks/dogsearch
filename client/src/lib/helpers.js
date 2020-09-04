const pipe = (...fns) => val => fns.reduce((x, fn) => fn(x), val)

const prop = key => obj => obj[key]

const maybe = pred => x => pred(x) ? x : undefined

const map = fn => xs => Array.isArray(xs)
    ? xs.map(fn)
    : fn(xs)

const capitalise = str => str[0].toUpperCase() + str.slice(1)
const spaciate = str => str.replace(/([a-z])([A-Z])/, (_, a, b) => `${a} ${b}`)

export {
    capitalise,
    map,
    maybe,
    pipe,
    prop,
    spaciate,
}