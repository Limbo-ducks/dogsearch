const { MongoClient } = require('mongodb')

const mongoUri = 'mongodb://localhost:27017'
const mongoOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const client = new MongoClient(mongoUri, mongoOpts)

client.connect()
    .then(client => client.db('talentwyre').collection('dogs'))
    .then(col => col.deleteMany({}))
    .then(() => console.log('DB successfully emptied'))
    .catch(console.error)
    .finally(() => client.close())
