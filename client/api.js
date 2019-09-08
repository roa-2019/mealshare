import request from 'superagent'

export function addMealDetails(newMealEntry) {
  return request
    .post('/postNewMeal')
    .send(newMealEntry)
    .catch(e => console.log('opps, e.message'))
}

export function deleteUser(listId) {
  return request.delete('/v1/ingredients/' + listId).catch(e => {
    console.log('oppsie', e.message)
  })
}
