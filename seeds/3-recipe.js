exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipe').insert([
        {
          id: 1,
          recipe_ingredient: 'Eggplant',
          recipe_quantity: 1,
          recipe_id: 1
        },
        { id: 2, recipe_ingredient: 'Onion', recipe_quantity: 2, recipe_id: 1 },
        {
          id: 3,
          recipe_ingredient: 'Tinned Tomatoes',
          recipe_quantity: 2,
          recipe_id: 1
        }
      ])
    })
}
