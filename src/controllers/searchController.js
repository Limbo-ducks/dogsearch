const { map, pipe } = require('../lib/helpers')

const formatListField = ([ key, val ]) => Array.isArray(val)
  ? [ key, { $all: val.toLowerCase() } ]
  : [ key, val.toLowerCase() ]

const parseLists = pipe(
  Object.entries,
  map(formatListField),
  Object.fromEntries
)

const parseRanges = fields => ({
    $and: Object.entries(fields)
      .flatMap(([ key, [ min, max ] ]) => [
        { [key]: { $gte: min } },
        { [key]: { $lte: max } }
      ])
})

const makeQuery = ({ options, ranges }) => ({
  ...parseLists(options),
  ...parseRanges(ranges)
})

const searchController = client => (req, res, next) => {
  console.log(makeQuery(req.body))
  client.db('talentwyre')
    .collection('profiles')
    .find(makeQuery(req.body)).toArray()
    .then(data => res.json(data))
    .catch(next)
}

module.exports = searchController
