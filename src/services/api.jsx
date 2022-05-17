import axios from 'axios';

export default axios.create({
    baseURL: 'https://apifake-jsonserver.herokuapp.com',
});