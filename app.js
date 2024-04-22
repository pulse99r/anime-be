const express = require('express')
const app = express()
app.use(express.json())
const db = require('./db/dbConfig.sql')

// app.use('/' )
app.get('/', (req, res) => {
  res.send (`You've reached the brand new! full stack app`)
})

module.exports = app;