const { map, pipe } = require('../lib/helpers')

const formatListField = ([ key, val ]) => Array.isArray(val)
  ? [ key, { $all: val } ]
  : [ key, val ]

const parseLists = pipe(
  Object.entries,
  map(formatListField),
  Object.fromEntries
)

const parseCredit = pipe(
  map(x => [ x, { $exists: true, $ne: [] }]),
  Object.fromEntries
)

const parseRanges = fields => ({
    $and: Object.entries(fields)
      .flatMap(([ key, [ min, max ] ]) => [
        { [key]: { $gte: min } },
        { [key]: { $lte: max } }
      ])
})

const makeQuery = ({ credit, options, ranges }) => ({
  ...parseCredit(credit),
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
