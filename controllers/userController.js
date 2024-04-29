const express = require('express')
const userController = express.Router()
const db = require('../db/dbConfig.sql')

// * * * *  ROUTES * * * *
// * * ALL USERS
userController.get('/', async (req, res) => {
  try {
    const users = await db.any('SELECT * FROM users02')
    res.status(200).json(users)
  } catch (error){
    res.status(400).json({error: 'Server not responding'})
  }
})
// * * SINGLE USER
userController.get('/:id', async (req, res) => {
  const id = req.params.id
  console.log('id entered was',id)
  try {
    const user = await db.any('SELECT * FROM users02 WHERE id=$1',[id])
    res.status(200).json(user)
  } catch (error){
    res.status(400).json({error: 'Server not responding'})
  }
})
// * * CREATE USER
userController.post('/', async (req, res) => {
  const body = request.body
  const newUser = {first_name, last_name,email,username,phone, created_at} = body
  
  try {
    const newUser = await db.one('INSERT first_name, last_name, email, username,phone, created_at VALUES first_name=$1, last_name=$2,emai=$3, username=$4, phone=$5, created_at=$5 INTO users02',[first_name, last_name, email, username,phone, created_at])
       res.status(200).json(newUser)
  } catch (error){
    res.status(400).json({error: 'Server not responding'})
  }
})

module.exports = userController;