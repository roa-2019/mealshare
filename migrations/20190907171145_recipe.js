exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', table => {
    table.increments('id').primary()
    table.string('recipe_ingredient')
    table.integer('recipe_quantity')
    table.integer('recipe_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe')
}
