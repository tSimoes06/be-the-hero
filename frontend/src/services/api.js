//arquivo que provem integracao com algum servico externo
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;