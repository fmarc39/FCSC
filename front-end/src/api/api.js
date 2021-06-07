import axios from 'axios';
import { authHeader } from 'selectors/auth-header';

export default axios.create({
  baseURL: 'http://localhost:3001',
  //baseURL: 'https://fcsc-back.herokuapp.com/',
  timeout: 5000,
  headers: authHeader(),
});
