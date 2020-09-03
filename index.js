const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const path = require('path')
const searchController = require('./src/controllers/searchController')
const profileController = require('./src/controllers/profileController')

const { PORT = 5000 } = process.env
const mongoUri = 'mongodb://localhost:27017'
const mongoOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const app = express()
const client = new MongoClient(mongoUri, mongoOpts)

client.connect()
    .then(client => {
        app.use(bodyParser.json())
        app.use(express.static(path.resolve('./client/build')))

        app.use((req, res, next) => console.log('Request body: ', req.body) || next())

        app.post('/api/search', searchController(client))

        app.get('/api/profiles/:id', profileController(client))

        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
    })
    .catch(console.error)
