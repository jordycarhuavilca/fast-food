import axios from '../node_modules/axios/dist/axios.js'
import url from '../config.js'

const login = async (data) => {
  return await axios.post(`${url}/login`, data)
}

export default login
