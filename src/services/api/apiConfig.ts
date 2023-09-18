import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.137.116:8080/',
  headers: {
    "Content-Type": 'application/json'
  }
});
