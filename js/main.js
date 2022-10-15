const navBar = document.getElementById('nav_bar_desplegable')
const header = document.querySelector('header')
window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth <= 400) {
    navBar.classList.remove('disactive')
    navBar.classList.add('active')
    header.classList.add('disactive')
  } else if (document.documentElement.clientWidth > 400) {
    navBar.classList.add('disactive')
    navBar.classList.remove('active')
    header.classList.remove('disactive')
  }
})
