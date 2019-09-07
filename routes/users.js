const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getList().then(list => {
    db.getMealDetails().then(mealDetails =>
      res.render('index', { list, mealDetails })
    )
  })
})

router.post('/add-ingredient', (req, res) => {
  let form = req.body
  const formData = {
    quantity: form.quantity,
    ingredient: capitalizeFirstLetter(form.ingredient),
    name: capitalizeFirstLetter(form.name)
  }

  db.addIngredient(formData).then(() => res.status(201).redirect('/'))
})

router.delete('/v1/ingredients/:id', (req, res) => {
  let id = req.params.id
  db.deleteIngredient(id).then(() => {
    res.status(201).redirect('/')
  })
})

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = router
