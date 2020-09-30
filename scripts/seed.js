// const faker = require('faker')
const { MongoClient } = require('mongodb')

const mongoUri = 'mongodb://localhost:27017'
const mongoOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

// const makeDates = () =>
//     Array.from({ length: 3 }, (_, i) => ({
//         from: `2020-${10 + i}-${faker.random.number({ min: 1, max: 10 }).toString().padStart(2, '0')}`,
//         to: `2020-${10 + i}-${faker.random.number({ min: 11, max: 30 })}`,
//     }))

const dogs = require('./dogs.js')

// const seed = process.argv.includes('-t')
//     ? dogs
//     : data.concat(dogs)

const seed = dogs;

const client = new MongoClient(mongoUri, mongoOpts)

client.connect()
    .then(client => client.db('dogsearch').collection('dogs'))
    .then(col => col.insertMany(seed))
    .then(() => console.log('Success!'))
    .catch(console.error)
    .finally(() => client.close())
