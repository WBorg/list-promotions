import axios from 'axios';

export default axios.create({
    // baseURL: 'https://apifake-jsonserver.herokuapp.com',
    // baseURL: 'https://apilistpromotions.azurewebsites.net',
    // baseURL: 'https://apilistpromotions.azurewebsites.net',
    baseURL: 'http://localhost:3004',
});