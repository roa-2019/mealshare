const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getList,
  getMealDetails,
  addIngredient,
  addNewMeal,
  deleteIngredient
}

function getList(db = connection) {
  return db('ingredients').select()
}

function getMealDetails(db = connection) {
  return db('mealDetails')
    .select()
    .orderBy('id', 'desc')
    .first()
}

//formData doesn't seem like a good name for the variable - ingredient perhaps?
function addIngredient(formData, db = connection) {
  return db('ingredients').insert({
    quantity: formData.quantity,
    ingredient: formData.ingredient,
    name: formData.name
  })
}

function addNewMeal(newMealData, db = connection) {
  return db('mealDetails').insert(newMealData)
}

function deleteIngredient(id, db = connection) {
  return db('ingredients')
    .where('id', id)
    .del()
}
