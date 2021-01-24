import axios from 'axios'

const api = axios.create({
    baseURL:'https://tyagoneo4j.herokuapp.com'
})

export default api;