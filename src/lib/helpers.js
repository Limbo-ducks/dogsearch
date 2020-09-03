const map = fn => xs => xs.map(fn)

const pipe = (...fns) => val => fns.reduce((x, fn) => fn(x), val)

module.exports = {
    map,
    pipe
}
