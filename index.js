require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')
const path = require('path')
const { MongoClient } = require('mongodb')
const searchController = require('./src/controllers/searchController')
const profileController = require('./src/controllers/profileController')
const auth = require('./src/routes/auth')
const user = require('./src/routes/user')
const dbHandler = require('./src/lib/db')

const { PORT = 5000, NODE_ENV = 'prod', MONGO_URI } = process.env
const mongoUri = NODE_ENV === 'dev'
  ? 'mongodb://localhost:27017'
  : MONGO_URI
const mongoOpts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const app = express()
const client = new MongoClient(mongoUri, mongoOpts)

client.connect()
  .then(dbHandler)
  .then(db => {
    app.use(bodyParser.json())
    app.use(cookieSession({
      name: 'session',
      maxAge: 24 * 60 * 60 * 1000,
      keys: [ '123123123' ],
    }))
    app.use(passport.initialize())
    app.use(passport.session())
    
    app.use(express.static(path.resolve('./client/build')))

    app.use('/api/auth', auth(db))
    app.use('/api/users', user(db))

    app.post('/api/search', searchController(db))
    app.get('/api/profiles/:id', profileController(db))

    app.get('*', (req, res) => res.sendFile(path.resolve('client/build/index.html')));

    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
  })
  .catch(console.error)
