import API from './axios'

export const fetchItems = () => API.get('/items/')
export const fetchItem = (id) => API.get(`/items/${id}/`)
export const createItem = (data) => API.post('/items/', data)
export const updateItem = (id, data) => API.patch(`/items/${id}/`, data)
export const deleteItem = (id) => API.delete(`/items/${id}/`)