exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mealDetails')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('mealDetails').insert([
        {
          id: 1,
          date: 'Fri 11 - 11',
          recipe_name: 'Minestrone',
          recipe_imgUrl:
            'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fhowtodoright.com%2Fwp-content%2Fuploads%2F2017%2F11%2F103304021-56a2bcfc3df78cf772796214.jpg&f=1&nofb=1'
        }
      ])
    })
}
