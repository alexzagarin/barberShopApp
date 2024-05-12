import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5001';
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        console.error('No token found');
    }
    return config;
});

export default axios;
