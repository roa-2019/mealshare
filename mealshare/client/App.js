import request from 'superagent'

export function launchApp() {

}

function deleteUser(userId) {
  return request.delete('/v1/users/' + userId).catch(e => {
    console.log('poosie', e)
  })
}
