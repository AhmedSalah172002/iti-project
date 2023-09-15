import axios from 'axios'


const baseUrl = axios.create({ baseURL: "http://localhost:2000" })

export default baseUrl