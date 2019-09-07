exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { id: 1, quantity: 1, ingredient: 'Eggplant', name: 'Sally' },
    { id: 2, quantity: 2, ingredient: 'Onion', name: 'Wendy' },
    { id: 3, quantity: 1, ingredient: 'Carrot', name: 'Cindy' }
  ])
}
