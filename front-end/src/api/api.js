import axios from 'axios';

export default axios.create({
  baseURL: 'https://fcsc-back.herokuapp.com/',
  timeout: 5000,
});
