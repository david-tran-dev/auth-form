/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const apiAxios = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

export async function requestSignup(email, password) {
  try {
    const data = { email, password };
    const response = await apiAxios.post('/signup', data);
    return response;
  }
  catch (err) {
    return err.response;
  }
}
