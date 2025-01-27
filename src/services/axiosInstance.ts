import axios from 'axios';

// Change BASE_URL to your server's URL.
 export const BASE_URL = "https://api.portal.datconsultancy.com/";
//export const BASE_URL = 'http://localhost:5569/';
// Main API instance
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor
instance.interceptors.response.use(
  response => response,
  error => {
    // Handle response errors globally
    if (error.response) {
      console.error('Error Response:', error.response.data);
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Request:', error.request);
    } else {
      // Something else happened while setting up the request
      console.error('Error Message:', error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;
