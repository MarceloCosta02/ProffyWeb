import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3333' url teste
    baseURL: 'https://proffy-nlw.herokuapp.com' // url produção
})

export default api;