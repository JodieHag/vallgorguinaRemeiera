const galeriaDocument = document.querySelector('.galeria')
const lightDocument = document.querySelector('.lightbox')
const allImages = galeriaDocument.querySelectorAll('img')
const closeButton = lightDocument.querySelector('.lightbox-close')
const lightBoxImage = lightDocument.querySelector('img')
allImages?.forEach((element) => {
  element.addEventListener('click', () => {
    lightDocument.classList.toggle('mm-hidden')
    lightBoxImage.setAttribute('src', element.src)
  })
})

closeButton.addEventListener('click', () => {
  lightDocument.classList.toggle('mm-hidden')
  lightBoxImage.setAttribute('src', null)
})
