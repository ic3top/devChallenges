import axios from 'axios';

const quotes = axios.create({
  baseURL: 'https://quote-garden.herokuapp.com/api/v3/',
});

quotes.interceptors.response.use((response) => response.data, //
  (error) => Promise.reject(error));

export default quotes;
