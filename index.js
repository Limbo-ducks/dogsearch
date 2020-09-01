const express = require('express')
const path = require('path')

const { PORT } = process.env

const app = express()

app.use(express.static(path.resolve('./client/build')))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
