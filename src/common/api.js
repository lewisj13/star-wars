//Base API Config

import axios from 'axios';

export const API = axios.create({
  baseURL: `//swapi.co/api/`
})
API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
