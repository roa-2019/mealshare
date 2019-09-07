exports.up = function(knex, Promise) {
  return knex.schema.createTable('mealDetails', table => {
    table.increments('id').primary()
    table.string('date')
    table.string('recipe_name')
    table.string('recipe_imgUrl')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mealDetails')
}
