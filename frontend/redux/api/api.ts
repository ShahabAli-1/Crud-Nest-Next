import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000', // Replace with your backend URL if different
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
