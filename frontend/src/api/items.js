import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8000',
})

export const fetchItems = () => API.get('/items/')
export const fetchItem = (id) => API.get(`/items/${id}/`)
export const createItem = (data) => API.post('/items/', data)
export const updateItem = (id, data) => API.patch(`/items/${id}/`, data)
