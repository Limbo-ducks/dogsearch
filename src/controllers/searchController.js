const R = require('ramda')
const { shuffle } = require('../lib/helpers')
const util = require('util')

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

const parseDates = dates => {
  const from = dates.from
    ? { $lte: dates.from }
    : { $exists: true }

  const to = dates.to
    ? { $gte: dates.to }
    : { $exists: true }

  return ({
    available: {
      $elemMatch: {
        from,
        to,
      }
    }
  })
}

const parseRanges = fields => ({
  $and: Object.entries(fields)
    .flatMap(([ key, [ min, max ] ]) => [
      { [key]: { $gte: min } },
      { [key]: { $lte: max } }
    ])
})

const makeQuery = ({ credit = [], dates, options, ranges }) => ({
  ...parseCredit(credit),
  // ...parseDates(dates),
  ...parseLists(options),
  ...parseRanges(ranges),
  finishedProfile: true,
  type: 'talent',
})

const sortData = R.pipe(
  R.partition(R.propEq('premium', true)),
  R.map(shuffle),
  R.flatten
)

const searchController = db => (req, res, next) => {
  console.log(util.inspect(makeQuery(req.body), { showHidden: false, depth: null }))
  db.search(makeQuery(req.body))
    .then(sortData)
    .then(data => res.json(data))
    .catch(next)
}

module.exports = searchController
