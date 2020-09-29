const R = require('ramda')
const { v1: uuid } = require('uuid')

module.exports = client => {
  const db = client.db('dogsearch')

  const createUser = id =>
    db.collection('dogs')
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
      .then(R.prop('value'))

  const findById = id => 
    db.collection('dogs').findOne({ id }, { projection: { _id: 0 }})

  const search = query =>
    db.collection('dogs')
      .find(query, { projection: { _id: 0 }})
      .toArray()

  const updateProfile = (profile, data) =>
    db.collection('dogs')
      .findOneAndUpdate({ profile }, { $set: data }, { returnOriginal: false })
      .then(R.prop('value'))

  return {
    createUser,
    findById,
    search,
    updateProfile,
  }
}