import axios from 'axios'

export const BASE_URL = import.meta.env.VITE_API_URL
export const TOKEN = import.meta.env.VITE_API_TOKEN
export const UPLOAD_URL = import.meta.env.VITE_API_UPLOAD_URL

export const SERVER = axios.create({
    baseURL: BASE_URL
})

export default SERVER