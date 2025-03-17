import axios from 'axios'

const api = axios.create({
  baseURL: "https://lojanabio-api-staging.develr.io/",
})

// save jwt to a header
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default api;