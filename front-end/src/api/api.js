import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:3001',
  baseURL: 'https://fcsc-back.herokuapp.com/',
  timeout: 5000,
});
