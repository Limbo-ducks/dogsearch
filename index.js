const express = require('express')
const jsonServer = require('json-server')
const path = require('path')

const { PORT = 5000 } = process.env

const app = express()

app.use(express.static(path.resolve('./client/build')))
app.use('/api', jsonServer.router('db.json'))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
