import {getImg} from './main'
console.log('ffnjfnjf')
document.body.addEventListener('load',()=>{
    console.log(getImg)
    document.querySelector('.banner img').src = getImg
})