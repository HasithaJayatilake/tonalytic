import axios from 'axios';
import * as BlogAPI from './blog-api';

// Add the user token to all outgoing requests
axios.interceptors.request.use(
  
  function (config) {
    config.baseURL =
      process.env.NODE_ENV === 'production'
        ? 'https://api.dev.hasithajayatilake.com'
        // : 'http://192.168.43.47:8082';
        : 'http://localhost:8082'

    config.validateStatus = (status: number) => status >= 200 && status < 300;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  function (error) {
    return Promise.reject(error?.response ?? error);
  }
);

export {
  BlogAPI,
};
