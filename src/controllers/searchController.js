const R = require('ramda')
const { shuffle } = require('../lib/helpers')

const formatListField = ([ key, val ]) => Array.isArray(val)
  ? [ key, { $all: val } ]
  : [ key, val ]

const parseLists = R.pipe(
  Object.entries,
  R.map(formatListField),
  Object.fromEntries
)

const parseCredit = R.pipe(
  R.map(x => [ `actingCredits.${x}`, { $exists: true, $ne: [] } ]),
  Object.fromEntries
)

const parseRanges = fields => ({
    $and: Object.entries(fields)
      .flatMap(([ key, [ min, max ] ]) => [
        { [key]: { $gte: min } },
        { [key]: { $lte: max } }
      ])
})

const makeQuery = ({ credit = [], options, ranges }) => ({
  ...parseCredit(credit),
  ...parseLists(options),
  ...parseRanges(ranges)
})

const sortData = R.pipe(
  R.partition(R.propEq('premium', true)),
  R.map(shuffle),
  R.flatten
)

const searchController = client => (req, res, next) => {
  console.log(makeQuery(req.body))
  client.db('talentwyre')
    .collection('profiles')
    .find(makeQuery(req.body)).toArray()
    .then(sortData)
    .then(data => res.json(data))
    .catch(next)
}

module.exports = searchController
