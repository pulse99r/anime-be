const express = require('express')
const animesController = express.Router()
const db = require('../db/dbConfig.sql')

// * * * *  ROUTES * * * *
// * * ALL ANIMES
animesController.get('/', async (req, res) => {
  try {
    const animes = await db.any('SELECT * FROM animes02')
    res.status(200).json(animes)
  } catch (error){
    res.status(400).json({error: 'Server not responding'})
  }
})
// * * SINGLE ANIME
animesController.get('/:id', async (req, res) => {
  const id = req.params.id
  console.log('id entered was',id)
  try {
    const anime = await db.any('SELECT * FROM animes02 WHERE id=$1',[id])
    res.status(200).json(anime)
  } catch (error){
    res.status(400).json({error: 'Server not responding'})
  }
})

module.exports = animesController;