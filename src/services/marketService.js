import {client} from './client';

function getTopFiveCryptoListings() {
  return client.get('/listings/latest', {
    start: '1',
    limit: '5',
    convert: 'USD',
    sort: 'price',
  });
}

function getAragonAntTokenListing() {
  return client.get('/quotes/latest', {
    symbol: 'ANT',
  });
}

export {getTopFiveCryptoListings, getAragonAntTokenListing};
