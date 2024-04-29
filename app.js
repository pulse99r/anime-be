const express = require('express')
const app = express()
app.use(express.json())
const db = require('./db/dbConfig.sql')
const userController = require('./controllers/userController')
const animesController = require('./controllers/animesController')
const cors = require('cors')

app.use(cors())
app.use('/users', userController )
app.use('/animes', animesController )

app.get('/', (req, res) => {
  res.send (`You've reached the brand new! full stack app`)
})

module.exports = app;