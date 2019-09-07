import request from 'superagent'

export function launchApp() {
  const deleteBtns = document.querySelectorAll('.delete-btn')

  deleteBtns.forEach(btn => {
    btn.addEventListener('click', handleDelete)
  })

  submitBtns.forEach(btn => btn.addEventListener('keydown', handleEnter))
}

function handleDelete(e) {
  const listId = e.target.dataset.id

  deleteUser(listId).then(() => {
    document.location = '/'
  })
}

const submitBtns = document.querySelectorAll('input[type="text"]')

function handleEnter(e) {
  if (e.keyCode == 13 && e.shiftKey == false) {
    this.form.submit()
  }
}

function deleteUser(listId) {
  return request.delete('/v1/ingredients/' + listId).catch(e => {
    console.log('oppsie', e.message)
  })
}

const content = document.querySelector('[contenteditable]') // 1. Listen for changes of the contenteditable element
content.addEventListener('input', function(event) {
  // 2. Retrive the text from inside the element
  console.log(content.innerHTML)
})
