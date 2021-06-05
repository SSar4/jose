import axios from 'axios';

const api = axios.create({

    baseURL: 'http://192.168.0.103:8084/api/usuarios/',

});
export default api;