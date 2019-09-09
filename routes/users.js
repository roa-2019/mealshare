const express = require('express')
const db = require('../db')

const router = express.Router()

//this file has nothing to do with users, suggest renaming

router.get('/', (req, res) => {
  db.getList().then(list => {
    db.getMealDetails().then(mealDetails => {
      res.render('index', { list, mealDetails })
    })
  })
})

router.post('/add-ingredient', (req, res) => {
  let form = req.body
  const formData = {
    quantity: form.quantity,
    ingredient: capitalizeFirstLetter(form.ingredient),
    name: capitalizeFirstLetter(form.name)
  }

  //add a catch incase there is a db error
  db.addIngredient(formData).then(() => res.status(201).redirect('/'))
})


//v1 routing convention is inconsistent
router.delete('/v1/ingredients/:id', (req, res) => {
  let id = req.params.id
  //needs catch
  db.deleteIngredient(id).then(() => {
    res.status(201).redirect('/')
  })
})

router.post('/postNewMeal', (req, res) => {
  const newMeal = {
    date: req.body.mealDetails_date,
    recipe_name: req.body.recipe_name
  }

  db.getMealDetails().then(latestMeal => {
    const { date, recipe_name } = latestMeal

    if (date === newMeal.date && recipe_name === newMeal.recipe_name) {
      //this shouldn't be a 201 status as the meal wasn't saved
      return res.status(201).redirect('/')
    }

    //needs catch in case of db error
    return db.addNewMeal(newMeal).then(res.status(201).redirect('/'))
  })
})

//what does this function do if string is empty?
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = router
