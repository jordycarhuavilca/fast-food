const items = document.querySelectorAll('.searchInformation ul a li')
const fatherItems = document.querySelectorAll('.searchInformation ul a')
const search = document.querySelector('.search')
const notFound = document.querySelector('.notFound')
const searchInformation = document.querySelector('.searchInformation')
const searchSugerencias = document.querySelector('.search__sugerencias')

const buscar = (e) => {
  let value = e.target.value
  searchInformation.style.height = '11rem'
  if (e.target.value.length === 0 || e.target.value === '') {
    for (let index = 0; index < fatherItems.length; index++) {
      fatherItems[index].style.display = 'none'
      notFound.classList.remove('desapareceNotFound')
    }
  }
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (value.toLowerCase() == items[i].textContent.charAt(i).toLowerCase()) {
        notFound.classList.add('desapareceNotFound')
        fatherItems[j].style.display = 'block'
      }
    }
  }
  if (value === 'comida') {
    notFound.classList.add('desapareceNotFound')
    let valor = e.target.value
    e.target.value = valor + ' tailandesa'
  }
}
const desaparecerListInformation = () => {
  searchInformation.style.height = '0'
}
searchSugerencias.addEventListener('click', desaparecerListInformation)
search.addEventListener('keyup', buscar)
