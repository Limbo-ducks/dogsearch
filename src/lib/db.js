const { v1: uuid } = require('uuid')

module.exports = client => {
  const db = client.db('talentwyre')

  const createUser = id => db.collection('profiles')
    .findOneAndUpdate({
      profile: id,
    }, {
      $setOnInsert: { 
        id: uuid(),
        profile: id,
        finishedProfile: false,
      },
    }, {
      projection: { _id: 0 },
      returnOriginal: false,
      upsert: true,
    })

  const findById = id => db.collection('profiles').findOne({ id })

  const search = query => db.collection('profiles').find(query).toArray()

  return {
    createUser,
    findById,
    search,
  }
}