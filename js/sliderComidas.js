const arrowLeft = [...document.querySelectorAll('.arrows #btnLeft')]
const arrowRight = [...document.querySelectorAll('.arrows #btnRight')]
const listImg = document.querySelectorAll('.sliderTestimo-img')
const rueda = [...document.querySelectorAll('.sliderTestimo__rueda')]
const sliderBody = document.querySelector('.sliderTestimo__body')

rueda.forEach((item, i) => {
  let containerDimentions = item.getBoundingClientRect()
  let containerWidth = containerDimentions.width
  arrowRight[i].addEventListener('click', () => {
    // item.scrollLeft += containerWidth
    item.scrollBy(350,0)
  })
  arrowLeft[i].addEventListener('click', () => {
    // item.scrollLeft -= containerWidth
    item.scrollBy(-350,0)
  })
})