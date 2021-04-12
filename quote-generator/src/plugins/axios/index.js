import axios from 'axios';

const quotes = axios.create({
  baseURL: 'https://quote-garden.herokuapp.com/api/v3/',
});

quotes.interceptors.response.use((response) => response.data.data, //
  (error) => Promise.reject(error));

// quotes.get('quotes/random').then((data) => console.log(data));
// quotes.get('quotes').then((data) => console.log(data));
// quotes.get('genres').then((data) => console.log(data));
// quotes.get('authors').then((data) => console.log(data));

export default quotes;
