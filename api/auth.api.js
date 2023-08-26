import url from '../config.js'
function setCookie(name, value, minutes) {
  const expires = new Date();
  expires.setTime(expires.getTime() + minutes * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}

export const loginPost = async (data) => {
  console.log(data)
  const option = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials : true,
    credentials : 'include',
    body: JSON.stringify(data)
  }
 
 fetch(`${url}/login`, option)
  .then((res) => res.json())
  .then((resData) =>{
     const res = resData
     setCookie('token',
     res.cookie,5)

    })
  .catch((erro) => {
    console.log(erro)
  })
}



// token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnbWFpbCI6e30sInBhc3N3b3JkIjp7fSwiaWF0IjoxNjkyOTMwODcxLCJleHAiOjE2OTI5MzExNzF9.AtJ7uyIVExfg3jAjRmUMGQlQMZPuT0vKqRe7FCXp2J0

export const authentificateToken = async () => {
  let res = null
  try{
    const  token = document.cookie.split('=')[1]
  console.log(token)
  const option = {
    method: 'post',
    headers: {
      'Content-Type' : 'application/json'
    },
    withCredentials: true,
    credentials : 'include',
    body : JSON.stringify({token})
  }
  await fetch(`${url}/compra`, option)
    .then((res) => res.json())
    .then((resData) => {
      res = resData.data 
    }
    )
    .catch((erro) => {
      res = false
      console.log(erro)
      console.log(res)
    })    
  }catch(err){
    console.log(err)
  }
  if(!res)res = false
  
  return res
}

