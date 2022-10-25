const hamburgerIcon = document.getElementById('hamburgerIcon')
const navDesplegable = document.querySelector('.nav-desplegable')
const navDesplegableButtonClose = document.querySelector('#nav-desplegable__button-close')
const iconList = document.querySelector('#icon-list')
const header = document.querySelector('header')
const containerFluid = document.querySelector('.container-fluid')
const listImgBanner = [
  './img/icon-food/burger_fast_food_icon_181517.png',
  './img/icon-food/donut.png',
  './img/icon-food/french_fries.png',
  './img/icon-food/soda_drink.png'
]
const banner__junkFood = document.querySelector('#banner__junkFood')
let incrementador = 0
// es para que el menu desplegable tenga un ancho segun view port width
function Banner__cambiarImagenes() {
  if (incrementador == listImgBanner.length) {
    incrementador = 0
  }
  banner__junkFood.src = listImgBanner[incrementador]
  incrementador++
}
window.addEventListener('resize', () => {
  if (document.body.clientWidth <= 576) {
    navDesplegable.style.width = '100vw'
  }
  if (document.body.clientWidth > 576 && document.body.clientWidth < 768) {
    navDesplegable.style.width = '18em'
  }
})
// appear and desappear menu despleable
hamburgerIcon.addEventListener('click', (e) => {
  e.preventDefault()
  navDesplegable.classList.remove('nav-desplegable')
  navDesplegable.classList.toggle('aparecer_nav-desplegable')
  navDesplegable.classList.add('active')
  containerFluid.style.background = 'rgba(225, 225, 225, 0)'
  document.body.style.background = 'rgba(225, 225, 225, 0)'
  if (document.body.clientWidth > 576) {
    navDesplegable.style.width = '18em'
  }
  if (document.body.clientWidth <= 576) {
    navDesplegable.style.width = '100vw'
  }
})
navDesplegableButtonClose.addEventListener('click', () => {
  navDesplegable.classList.remove('aparecer_nav-desplegable')
  navDesplegable.classList.remove('active')
  navDesplegable.classList.add('nav-desplegable')
  iconList.classList.add('active')
})
// cambiar de images
setInterval(Banner__cambiarImagenes, 1000)
