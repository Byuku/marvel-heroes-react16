import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  timeout: 1000,
});

const baseQueryParams = {
  // apikey: process.env.REACT_APP_MARVEL_API_KEY,
  ts: 100,
  apikey: '3a4b1d2b8a0b3008c5b13a548b676ecd',
  hash: '8b2b658ca5d88ce484d9ce9674fe3ddb',
};

const get = (url, query) => instance.get(url, {
  params: {
    ...query,
    ...baseQueryParams,
  },
});

export { instance as api, get };