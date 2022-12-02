const btnclose = document.querySelector('.btnClose')
const contenedor = document.querySelector('.contenedor')
const divAddCard = document.querySelector('.addCard')
const propinaTxt = document.querySelector('#propinaTxt')
const otroPropina = document.querySelector('#otroPropina')
const btnCloseCardPropina = document.querySelector('#btnCloseCardPropina')
const cantidadPropinaDivs = document.querySelectorAll('.cantidadPropina div')
const requisitosCardInputs = document.querySelectorAll('.requisitosCard input')
const btnSaveCard = document.querySelector('.btnSaveCard')
const appearAddCard = (e) => {
  e.preventDefault()
  console.log('1')
  document.body.classList.remove('off')
  document.body.classList.add('on')
  // document.body.style.overflow = 'hidden'
}
const disappearAddCard = () => {
  console.log('2')
  document.body.classList.remove('on')
  document.body.classList.add('off')
  // document.body.style.overflowY = 'auto'
}
const opacityPropina = () => {
  divAddCard.style.zIndex = '1010'
  document.body.classList.add('opacityPropina')
  document.body.style.overflowY = 'auto'
  // overflow-x: scroll;
}
const desopacityPropina = () => {
  divAddCard.style.zIndex = '0'
  document.body.classList.remove('opacityPropina')
  document.body.style.overflow = 'hidden'

  // document.body.classList.remove(opacityPropina)
}
cantidadPropinaDivs.forEach((div) => {
  div.addEventListener('click', (e) => {
    dataId = e.target.getAttribute('data-id')
    switch (dataId) {
      case 'min':
        cantidadPropinaDivs[1].style.borderColor = '#d0d0d0'
        cantidadPropinaDivs[1].style.color = '#000'
        cantidadPropinaDivs[2].style.borderColor = '#d0d0d0'
        cantidadPropinaDivs[2].style.color = '#000'
        cantidadPropinaDivs[3].style.borderColor = '#d0d0d0'
        cantidadPropinaDivs[3].style.color = '#000'
        e.target.style.borderColor = 'rgb(41, 216, 132)'
        e.target.style.color = 'rgb(41, 216, 132)'
        propinaTxt.textContent = e.target.textContent
        break
      case 'average':
        cantidadPropinaDivs[0].style.borderColor = '#d0d0d0'
        cantidadPropinaDivs[0].style.color = '#000'
        cantidadPropinaDivs[2].style.borderColor = '#d0d0d0'
        cantidadPropinaDivs[2].style.color = '#000'
        cantidadPropinaDivs[3].style.borderColor = '#d0d0d0'
        cantidadPropinaDivs[3].style.color = '#000'
        e.target.style.borderColor = 'rgb(41, 216, 132)'
        e.target.style.color = 'rgb(41, 216, 132)'
        propinaTxt.textContent = e.target.textContent
        break
      case 'max':
        cantidadPropinaDivs[0].style.borderColor = '#d0d0d0'
        cantidadPropinaDivs[0].style.color = '#000'
        cantidadPropinaDivs[1].style.borderColor = '#d0d0d0'
        cantidadPropinaDivs[1].style.color = '#000'
        cantidadPropinaDivs[3].style.borderColor = '#d0d0d0'
        cantidadPropinaDivs[3].style.color = '#000'
        e.target.style.borderColor = 'rgb(41, 216, 132)'
        e.target.style.color = 'rgb(41, 216, 132)'
        propinaTxt.textContent = e.target.textContent
        break
    }
  })
})
const spanNombre = document.querySelector('.textName')
const fechaExpiracion = document.querySelector('.fechaExpiracion')
let valor = ''
const divSimulacionCard = document.querySelector('.simulacionCard')
const modifyCard = (props) => {
  props.i.setAttribute('class', `${props.atributte}`)
  props.identityCard.style.background = `${props.background}`
  props.i.style.fontSize = `${props.fontSize}`
  props.i.style.position = `${props.position}`
  props.i.style.top = `${props.top}`
  props.i.style.transform = `${props.transform}`
  divSimulacionCard.style.background = `${props.divCardBackground}`
  divSimulacionCard.style.background = `${props.divCardBackgroundLinear}`
}
const cards = (e) => {
  if (e.target.value === '') {
    const properties = {
      i: document.querySelector('.identityCard i'),
      identityCard: document.querySelector('.identityCard'),
      atributte: 'bi bi-credit-card-2-back',
      background: '#000',
      fontSize: '1rem',
      position: 'absolute',
      top: '15%',
      transform: 'translateX(50%)',
      divCardBackground: '#232526',
      divCardBackgroundLinear: 'linear-gradient(to left, #414345, #232526)'
    }
    modifyCard(properties)
  }
  if (e.target.value.charAt(0) == 2) {
    const properties = {
      i: document.querySelector('.identityCard i'),
      identityCard: document.querySelector('.identityCard'),
      background: '#000',
      atributte: 'bx bxl-mastercard',
      fontSize: '1.5rem',
      position: 'absolute',
      top: '15%',
      transform: 'translateX(16%)',
      divCardBackground: '#F37335',
      divCardBackgroundLinear: 'linear-gradient(to right, #FDC830, #F37335)'
    }
    modifyCard(properties)
  }
  if (e.target.value.charAt(0) == 4) {
    const properties = {
      i: document.querySelector('.identityCard i'),
      identityCard: document.querySelector('.identityCard'),
      atributte: 'bx bxl-visa',
      background: 'rgb(16,91,222)',
      fontSize: '1.5rem',
      position: 'absolute',
      top: '15%',
      transform: 'translateX(18%)',
      divCardBackground: '#021B79',
      divCardBackgroundLinear: 'linear-gradient(to right, #0575E6, #021B79)'
    }
    modifyCard(properties)
  }
}
const trueFalse = [false, false, false, false, false]
const validations = (e) => {
  let ascii = event.keyCode
  let name = e.target.name
  let length = e.target.value.length
  switch (name) {
    case 'numbers':
      cards(e)
      if (length === 4 || length === 9 || length === 14) {
        let textContent = e.target.value
        e.target.value = textContent + ' '
      }
      if (ascii < 48 || ascii > 57 || length > 18) {
        e.preventDefault()
      }
      console.log(e.target.value.charAt(0) == 2)
      if (length === 19 && (e.target.value.charAt(0) == 2 || e.target.value.charAt(0) == 4)) {
        trueFalse[0] = true
        divAdvertencia[0].classList.add('disactive')
        console.log('check 1')
      }
      // console.log('numbers ' + length)
      break
    case 'name':
      if (ascii === 32) {
        let textContent = e.target.value
        e.target.value = textContent + ' '
      }
      if ((ascii < 65 || ascii > 90) && (ascii < 97 || ascii > 122)) {
        e.preventDefault()
      } else {
        trueFalse[1] = true
        divAdvertencia[1].classList.add('disactive')
        console.log('check 2')
      }
      spanNombre.textContent = e.target.value
      break
    case 'lastName':
      if (e.target.value === '') {
        valor = spanNombre.textContent + ' '
      }
      if (ascii === 32) {
        let textContent = e.target.value
        e.target.value = textContent + ' '
      }
      if ((ascii < 65 || ascii > 90) && (ascii < 97 || ascii > 122)) {
        e.preventDefault()
      } else {
        trueFalse[2] = true
        divAdvertencia[2].classList.add('disactive')
        console.log('check 3')
      }
      // console.log(valor)
      spanNombre.textContent = valor + e.target.value
      break
    case 'fechaExpiracion':
      if (length === 2) {
        let valor = e.target.value
        e.target.value = valor + '/'
      }
      if (length > 4 || ascii < 48 || ascii > 57) {
        e.preventDefault()
      }
      fechaExpiracion.textContent = e.target.value
      if (length === 5) {
        trueFalse[3] = true
        divAdvertencia[3].classList.add('disactive')
        console.log('check 4')
      }
      console.log('fecha ' + length)
      break
    case 'cvv':
      if (ascii < 48 || ascii > 57 || length > 3) {
        e.preventDefault()
      }
      // console.log('cvv ' + length)
      if (length === 4) {
        trueFalse[4] = true
        divAdvertencia[4].classList.add('disactive')
        console.log('check 5')
      }
      break
  }
}

requisitosCardInputs.forEach((input) => {
  input.addEventListener('keypress', validations)
  input.addEventListener('keyup', validations)
})
const alertSuccess = document.querySelector('.alert-success')
const divAdvertencia = document.querySelectorAll('.advertencia')
const btnHacerPedido = document.querySelector('.btnHacerPedido button')
const btnCloseAlertSuccess = document.querySelector('#btnCloseAlertSuccess')

alertSuccess.style.position = 'absolute'
alertSuccess.style.top = '0'
alertSuccess.style.width = '100%'
const validateLengths = () => {
  console.log(requisitosCardInputs[1].value)

  // if (!(requisitosCardInputs[0].value.length  === 19)) {
  //   trueFalse[0] = false
  //   divAdvertencia[0].classList.remove('disactive')
  // }
  if (
    requisitosCardInputs[0].value.length === 19 &&
    (requisitosCardInputs[0].value.charAt(0) == 2 || requisitosCardInputs[0].value.charAt(0) == 4)
  ) {
    trueFalse[0] = true
    divAdvertencia[0].classList.add('disactive')
  } else {
    trueFalse[0] = false
    divAdvertencia[0].classList.remove('disactive')
  }

  if (requisitosCardInputs[1].value === '') {
    trueFalse[1] = false
    divAdvertencia[1].classList.remove('disactive')
  }
  if (requisitosCardInputs[2].value === '') {
    trueFalse[2] = false
    divAdvertencia[2].classList.remove('disactive')
  }
  if (!(requisitosCardInputs[3].value.length === 5)) {
    trueFalse[3] = false
    divAdvertencia[3].classList.remove('disactive')
  }
  if (!(requisitosCardInputs[4].value.length === 4)) {
    trueFalse[4] = false
    divAdvertencia[4].classList.remove('disactive')
  }
}
btnCloseAlertSuccess.addEventListener('click', () => {
  alertSuccess.style.zIndex = '-999'
  alertSuccess.classList.add('opacityAlert-success')
  alertSuccess.classList.remove('disOpacityAlert-success')
})
const validateAll = () => {
  if (trueFalse[0] && trueFalse[1] && trueFalse[2] && trueFalse[3] && trueFalse[4]) {
    alertSuccess.classList.remove('opacityAlert-success')
    alertSuccess.classList.add('disOpacityAlert-success')
    alertSuccess.style.zIndex = '99999'
    for (let i = 0; i < requisitosCardInputs.length; i++) {
      requisitosCardInputs[i].value = ' '
    }
    spanNombre.textContent = ''
    fechaExpiracion.textContent = ''
    const properties = {
      i: document.querySelector('.identityCard i'),
      identityCard: document.querySelector('.identityCard'),
      atributte: 'bi bi-credit-card-2-back',
      background: '#000',
      fontSize: '1rem',
      position: 'absolute',
      top: '15%',
      transform: 'translateX(50%)',
      divCardBackground: '#232526',
      divCardBackgroundLinear: 'linear-gradient(to left, #414345, #232526)'
    }
    modifyCard(properties)
  } else {
    console.log('false')
  }
}
btnSaveCard.addEventListener('click', validateLengths)
btnSaveCard.addEventListener('click', validateAll)
otroPropina.addEventListener('click', desopacityPropina)
btnCloseCardPropina.addEventListener('click', opacityPropina)
divAddCard.addEventListener('click', appearAddCard)
btnclose.addEventListener('click', disappearAddCard)
const inputElegirPropina = document.querySelector('.elegirPropina__input input')
const buttons = document.querySelectorAll('.button button')
const contaiSpinners = document.querySelector('.contaiSpinners')
const spinnerTxt = document.querySelector('.spinnerTxt div span')
const spinners = document.querySelector('.spinners')
const spinnerCheck = document.querySelector('.spinnerCheck')
const validarInputElegirPropina = (e) => {
  let ascii = event.keyCode
  let length = e.target.value.length
  console.log(ascii)
  if (ascii === 46) {
    let valor = e.target.value
    e.target.value = valor + '.'
  }
  if (length === 0) {
    let valor = e.target.value
    e.target.value = 'S/' + valor
  }
  if (length === 4) {
    let valor = e.target.value
    e.target.value = valor + '.'
  }
  if (length === 5) {
    let valor = e.target.value
    e.target.value = valor + '.'
  }
  if (ascii < 48 || ascii > 57 || length > 6) {
    e.preventDefault()
  }
}
const total = document.querySelector('.total')
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.name === 'guardar') {
      propinaTxt.textContent = inputElegirPropina.value
    } else if (e.target.name === 'sinPropina') {
      propinaTxt.textContent = 'S/0.0'
    }
  })
})
btnHacerPedido.addEventListener('click', () => {
  if (trueFalse[0] && trueFalse[1] && trueFalse[2] && trueFalse[3] && trueFalse[4]) {
    contaiSpinners.classList.remove('inactivo')
    document.body.style.overflowX = 'hidden !important'
    console.log('procesando la compra')
    setTimeout(() => {
      if (document.body.clientWidth >= 870) {
        spinnerTxt.style.position = 'absolute'
        spinnerTxt.style.left = '3.5%'
      }
      if (document.body.clientWidth <= 600) {
        spinnerTxt.style.position = 'absolute'
        spinnerTxt.style.left = '12%'
      }
      spinnerTxt.textContent = 'Se ha creado tu orden'
      spinners.style.display = 'none'
      spinnerCheck.classList.add('spinnerCheckIconStyle')
      spinnerCheck.innerHTML = '<i class="bi bi-check-circle-fill" style="color: rgb(41, 216, 132);"></i>'
    }, 4000)
    setTimeout(() => {
      contaiSpinners.classList.add('inactivo')
      trueFalse[0] = false
    }, 6000)
  } else {
    console.log('No way')
  }
})
inputElegirPropina.addEventListener('keypress', validarInputElegirPropina)
