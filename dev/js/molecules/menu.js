const burguerMenu = document.querySelector('.menu-burguer')
const listItems = document.querySelector('.main-menu')
burguerMenu.addEventListener('click', () => {
  burguerMenu.classList.toggle('open')
  burguerMenu.parentElement.classList.toggle('open')
  listItems.classList.toggle('open')
})

burguerMenu.nextSibling.addEventListener('click', () => {
  burguerMenu.classList.toggle('open')
  burguerMenu.parentElement.classList.toggle('open')
  listItems.classList.toggle('open')
})
