import axios from 'axios'
const dotenv = require('dotenv')
dotenv.config()

// const BASE_URL = 'http://localhost:5000/api/'
const BASE_URL = 'https://e-commerce-api-z6rv.onrender.com/api/'

// const TOKEN = process.env.TOKEN
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
  .currentUser.accessToken

//Best Method
// const TOKEN = JSON.parse(
//   JSON.parse(localStorage.getItem('persist:root'))?.user || '{}'
// )?.currentUser?.accessToken

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// })

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  ...(TOKEN && { headers: { token: `Bearer ${TOKEN}` } }),
})

axiosInstance.interceptors.request.use(
  function async(config) {
    config.headers.contentType = 'application/json'
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
export default axiosInstance
