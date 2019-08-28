const submitBtns = document.querySelectorAll('input[type="text"]')

submitBtns.forEach(btn => btn.addEventListener('keydown', handleEnter))

function handleEnter(e) {
  if (e.keyCode == 13 && e.shiftKey == false) {
    this.form.submit()
  }
}
