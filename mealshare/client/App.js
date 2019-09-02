import request from 'superagent'

export function launchApp() {
  const deleteBtns = document.querySelectorAll('.delete-btn')

  deleteBtns.forEach(btn => {
    btn.addEventListener('click', handleDelete)
  })
}

function handleDelete(e) {
  const listId = e.target.dataset.id

  deleteUser(listId).then(() => {
    document.location = '/'
  })
}

function deleteUser(listId) {
  return request.delete('/v1/ingredients/' + listId).catch(e => {
    console.log('oppsie', e.message)
  })
}
