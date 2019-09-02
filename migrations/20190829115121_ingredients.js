exports.up = (knex, Promise) => {
  return knex.schema.createTable('ingredients', table => {
    table.increments('id').primary()
    table.integer('quantity')
    table.string('ingredient')
    table.string('name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
