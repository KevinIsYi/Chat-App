import axios from 'axios';

const chatDB = axios.create({
    baseURL: 'http://localhost:8000',
});

export default chatDB;
