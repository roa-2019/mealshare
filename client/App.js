import request from 'superagent'

export function launchApp() {
  const deleteBtns = document.querySelectorAll('.delete-btn')
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', handleDelete)
  })

  const submitBtns = document.querySelectorAll('input[type="text"]')
  submitBtns.forEach(btn => btn.addEventListener('keydown', handleEnter))

  const editBtn = document.querySelector('#edit-mealDetails')
  editBtn.addEventListener('click', handleEdit)
}

function handleDelete(e) {
  const listId = e.target.dataset.id

  deleteUser(listId).then(() => {
    document.location = '/'
  })
}

function handleEnter(e) {
  if (e.keyCode == 13 && e.shiftKey == false) {
    this.form.submit()
  }
}

function handleEdit(e) {
  const editables = document.querySelectorAll('.editable')

  editables.forEach(editable => {
    editable.setAttribute('contenteditable', true)
  })

  e.target.classList.add('hide')

  const saveBtn = document.querySelector('#save-mealDetails')
  saveBtn.classList.remove('hide')
  saveBtn.addEventListener('click', saveEdit)
}

function saveEdit() {
  const recipe_name = document
    .querySelector('#recipe_name')
    .innerHTML.replace(/\n/g, '')
    .replace(/\s/g, '')
  const mealDetails_date = document.querySelector('#mealDetails_date').innerHTML

  const newMealEntry = {
    recipe_name,
    mealDetails_date
  }

  addMealDetails(newMealEntry).then(() => (document.location = '/'))
}

function addMealDetails(newMealEntry) {
  return request
    .post('/postNewMeal')
    .send(newMealEntry)
    .catch(e => console.log('opps, e.message'))
}

function deleteUser(listId) {
  return request.delete('/v1/ingredients/' + listId).catch(e => {
    console.log('oppsie', e.message)
  })
}
