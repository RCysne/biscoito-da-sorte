let container1 = document.getElementById('container1')
let container2 = document.getElementById('container2')
let btnCookie = document.getElementById('btn-open')
let btnTryAgain = document.getElementById('btn-tryAgain')

btnCookie.addEventListener('click', toggleClass)
btnTryAgain.addEventListener('click', toggleClass)

function toggleClass() {
  container1.classList.toggle('hide')
  container2.classList.toggle('hide')
}
