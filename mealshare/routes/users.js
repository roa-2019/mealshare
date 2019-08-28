const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/add-ingredient', (req, res) => {
  let form = req.body
  const {quantity, ingredient, name} = form
})

module.exports = router
