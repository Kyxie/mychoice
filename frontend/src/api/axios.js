import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8000',
})

API.interceptors.response.use(
  (res) => {
    if (res.data?.code === 0) {
      return res.data.data
    }
    return Promise.reject(res)
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default API