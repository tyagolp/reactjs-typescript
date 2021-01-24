import axios from 'axios'

const api = axios.create({
    baseURL:'http://tyagoneo4j.herokuapp.com'
})

export default api;