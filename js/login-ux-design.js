import authApi from "../api/auth.api.js"
console.log(authApi)

const inputs = document.querySelectorAll('.login__inputs input')
const spans = document.querySelectorAll('.login__inputs span')
const btnRegistrarme = document.querySelector('.sign-up__btn-registrarme')
const containerLogin = document.querySelector('.containerLogin')
const loginFormulario = document.querySelector('.login__formulario')
const login = document.querySelector('.login')
const loginIn = document.querySelector('.login-in')
const checkPerson = document.querySelector('.check-person')
const buttonClose = document.querySelector('.button-close')
const saverData = new SaverData()
function inputFocus(e) {
  let type0 = inputs[0].type
  if (e.target.getAttribute('type') === type0) {
    spans[0].style.color = '#0071e3'
  } else {
    spans[1].style.color = '#0071e3'
  }
}
function inputBlur(e) {
  let type0 = inputs[0].type
  if (e.target.getAttribute('type') === type0) {
    spans[0].style.color = '#000'
  } else {
    spans[1].style.color = '#000'
  }
  // spans.style.color = '#0071e3'
}

inputs.forEach((input) => {
  input.style.outlineColor = '#0071e3'
  input.addEventListener('focus', inputFocus)
  input.addEventListener('blur', inputBlur)
})
const appearRegistration = (e) => {
  e.preventDefault()
  containerLogin.classList.add('active')
  containerLogin.classList.remove('disactive')
}
const validarInputs = () => {  

}
const deleteLoginIn = (e) => {
  loginIn.style.display = 'none'
}
buttonClose.addEventListener('click', deleteLoginIn)
loginFormulario.addEventListener('submit', validarInputs)
btnRegistrarme.addEventListener('click', appearRegistration)
/***
 *
 * validacion create a new account
 *
 */
// const nombre = [{nome: 'jordy',year: 13},{}]
const formCreateAccount = document.getElementById('form-create-account')
const txtCreateAccount = document.querySelectorAll('#create-account__txt')
const inputsCreateAccount = document.querySelectorAll('#form-create-account input')
const btnCreateAccount = document.querySelector('.create-account__btn-create-account')
const iconCreateAccount = document.querySelectorAll('#form-create-account i')
const entrar = document.querySelector('.create-account__existAccount a')
const trueFalse = [
  {
    name: false
  },
  {
    email: false
  },
  {
    celular: false
  },
  {
    password: false
  },
  {
    confirmPassword: false
  }
]
const expresiones = {
  dni: /^\d{8}$/,
  nombre:
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
  email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
  telefono: /^\d{9}$/
}
var cantidades = {
  números_o_símbolos: 1,
  mayúsculas: 1,
  minúsculas: 1,
  letras: 1,
  longitud_contraseña: 1
}
var número = '\\d'
var símbolos = '$@'
var número_o_símbolo = '(' + número + '|[' + símbolos + '])'
var números_o_símbolos = '(?:.*' + número_o_símbolo + '){' + cantidades.números_o_símbolos + '}'
var mayúsculas = '(?:.*[A-Z]){' + cantidades.mayúsculas + '}'
var minúsculas = '(?:.*[a-z]){' + cantidades.minúsculas + '}'
var cadena =
  '^' +
  '(?=' +
  números_o_símbolos +
  ')' +
  '(?=' +
  mayúsculas +
  ')' +
  '(?=' +
  minúsculas +
  ')' +
  '\\S{' +
  cantidades.longitud_contraseña +
  ',}' +
  '$'
var expresition_regular = new RegExp(cadena, 'g')

const validarPassword = () => {
  let value = ''
  let i = 0
  for (let index = 0; index < inputsCreateAccount.length; index++) {
    if (inputsCreateAccount[index].name === 'password') {
      value = inputsCreateAccount[index].value
      i = index
      break
    }
  }
  console.log(expresition_regular.test(value))
  if (!expresition_regular.test(value)) {
    txtCreateAccount[i].style.background = '#FF0000'
    iconCreateAccount[i].style.color = '#FF0000'
    trueFalse[3].password = false
  }
  if (expresition_regular.test(value)) {
    trueFalse[3].password = true
    txtCreateAccount[i].style.background = 'rgb(217, 217, 217)'
    iconCreateAccount[i].style.color = 'rgb(217, 217, 217)'
  }
}
const validarConfirmPassword = () => {
  const password = document.querySelector('.create-account__password input')
  let value = ''
  let i = -1
  for (let index = 0; index < inputsCreateAccount.length; index++) {
    if (inputsCreateAccount[index].name === 'confirm-password') {
      value = inputsCreateAccount[index].value
      i = index
      break
    }
  }
  if (password.value === value && password.value !== '') {
    txtCreateAccount[i].style.background = 'rgb(217, 217, 217)'
    iconCreateAccount[i].style.color = 'rgb(217, 217, 217)'
    trueFalse[4].confirmPassword = true
  }

  if (!(password.value === value) || password.value === '') {
    txtCreateAccount[i].style.background = '#FF0000'
    iconCreateAccount[i].style.color = '#FF0000'
    trueFalse[4].confirmPassword = false
  }
}
const validarPhone = (e) => {
  let ascii = event.keyCode
  let length = e.target.value.length
  if (ascii < 48 || ascii > 57 || length > 8) {
    window.event.preventDefault()
    trueFalse[2].celular = false
  }
  if (length < 9 || e.target.value === '') {
    txtCreateAccount[2].style.background = '#FF0000'
    iconCreateAccount[2].style.color = '#FF0000'
    trueFalse[2].celular = false
  }
  if (length >= 8) {
    trueFalse[2].celular = true
    txtCreateAccount[2].style.background = 'rgb(217, 217, 217)'
    iconCreateAccount[2].style.color = 'rgb(217, 217, 217)'
  }
}
const validarEmail = () => {
  console.log('hola')
  let value = ''
  let i = -1
  for (let index = 0; index < inputsCreateAccount.length; index++) {
    if (inputsCreateAccount[index].name === 'email') {
      value = inputsCreateAccount[index].value
      i = index
      break
    }
  }
  if (!expresiones.email.test(value)) {
    txtCreateAccount[i].style.background = '#FF0000'
    iconCreateAccount[i].style.color = '#FF0000'
    trueFalse[1].email = false
  } else {
    trueFalse[1].email = true
    txtCreateAccount[i].style.background = 'rgb(217, 217, 217)'
    iconCreateAccount[i].style.color = 'rgb(217, 217, 217)'
  }
}
const validarNombre = (e) => {
  let ascii = e.keyCode

  if (ascii < 65 || (ascii > 90 && ascii < 97) || ascii > 122) {
    window.event.preventDefault()
  }
  trueFalse[0].name = e.target.value === '' ? false : true
  if (trueFalse[0].name) {
    iconCreateAccount[0].style.color = 'rgb(217, 217, 217)'
    txtCreateAccount[0].style.background = 'rgb(217, 217, 217)'
  }
}

const validar = (e) => {
  let nombre = e.target.name
  switch (nombre) {
    case inputsCreateAccount[0].name:
      validarNombre(e)
      break
    case inputsCreateAccount[1].name:
      validarEmail()
      break
    case inputsCreateAccount[2].name:
      validarPhone(e)
      break
    case inputsCreateAccount[3].name:
      validarPassword()
      break
    case inputsCreateAccount[4].name:
      validarConfirmPassword()
      break
  }
}
const validar2 = () => {
  const registratedAccount = document.querySelector('.registrated-account')
  validarEmail()
  validarPassword()
  validarConfirmPassword()
  if (!trueFalse[0].name) {
    iconCreateAccount[0].style.color = '#FF0000'
    txtCreateAccount[0].style.background = '#FF0000'
  }
  if (!trueFalse[2].celular) {
    iconCreateAccount[2].style.color = '#FF0000'
    txtCreateAccount[2].style.background = '#FF0000'
  }
  if (
    trueFalse[0].name &&
    trueFalse[1].email &&
    trueFalse[2].celular &&
    trueFalse[3].password &&
    trueFalse[4].confirmPassword
  ) {
    document.body.classList.add('confirm-Account')
    setTimeout(() => {
      document.body.classList.remove('confirm-Account')
      containerLogin.classList.remove('active')
    }, 3000)
  } else {
    registratedAccount.classList.remove('confirm-Account')
  }
  if (
    !(
      trueFalse[0].name &&
      trueFalse[1].email &&
      trueFalse[2].celular &&
      trueFalse[3].password &&
      trueFalse[4].confirmPassword
    )
  ) {
    setTimeout(() => {
      for (let index = 0; index < trueFalse.length; index++) {
        txtCreateAccount[index].style.background = 'rgb(217, 217, 217)'
        iconCreateAccount[index].style.color = 'rgb(217, 217, 217)'
      }
    }, 2000)
  }
}

inputsCreateAccount.forEach((input, index) => {
  input.setAttribute('data-id', `${index}`)
  //   if (input.type !== 'password') {
  input.addEventListener('keypress', validar)
  input.addEventListener('blur', validar)
  input.addEventListener('focus', validar)
  // }
})
const volverLogin = () => {
  containerLogin.classList.remove('active')
}
btnCreateAccount.addEventListener('click', validar2)
entrar.addEventListener('click', volverLogin)
const formulario = document.getElementById('form-create-account')
/**
 *
 *
 *
 */
const guardarTodo = () => {
  if (
    trueFalse[0].name &&
    trueFalse[1].email &&
    trueFalse[2].celular &&
    trueFalse[3].password &&
    trueFalse[4].confirmPassword
  ) {
    const datosUser = {
      nombre: inputsCreateAccount[0].value,
      email: inputsCreateAccount[1].value,
      celular: inputsCreateAccount[2].value,
      edad: inputsCreateAccount[3].value,
      password: inputsCreateAccount[4].value
    }
    SaverData.addDatos(datosUser)
  }
}
formulario.addEventListener('submit', guardarTodo)
