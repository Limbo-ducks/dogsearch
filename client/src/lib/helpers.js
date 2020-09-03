const pipe = (...fns) => val => fns.reduce((x, fn) => fn(x), val)
const map = fn => xs => xs.map(fn)

const capitalise = str => str[0].toUpperCase() + str.slice(1)
const spaciate = str => str.replace(/([a-z])([A-Z])/, (_, a, b) => `${a} ${b}`)

export {
    capitalise,
    map,
    pipe,
    spaciate,
}