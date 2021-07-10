import apisauce from 'apisauce';

const api = apisauce.create({
  baseURL: `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_MARKET_API_URL}`,
  headers: {
    'X-CMC_PRO_API_KEY': process.env.REACT_APP_MARKET_API_KEY,
  },
});

export {api as client};
