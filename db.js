const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getList,
  getMealDetails,
  addIngredient,
  deleteIngredient
}

function getList(db = connection) {
  return db('ingredients').select()
}

function getMealDetails(db = connection) {
  return db('mealDetails')
    .select()
    .first()
}

function addIngredient(formData, db = connection) {
  return db('ingredients').insert({
    quantity: formData.quantity,
    ingredient: formData.ingredient,
    name: formData.name
  })
}

function deleteIngredient(id, db = connection) {
  return db('ingredients')
    .where('id', id)
    .del()
}
