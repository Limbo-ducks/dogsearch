const parseRanges = fields => ({
    $and: Object.entries(fields)
      .flatMap(([ key, val ]) => [
        { [key]: { $gte: val.min } },
        { [key]: { $lte: val.max } }
      ])
})

const makeQuery = ({ options, ranges }) => ({
    ...options,
    ...parseRanges(ranges),
})

const searchController = client => (req, res, next) => {
    client.db('talentwyre')
        .collection('profiles')
        .find(makeQuery(req.body)).toArray()
        .then(data => res.json(data))
        .catch(next)
}

module.exports = searchController
