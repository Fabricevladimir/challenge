import PropTypes from 'prop-types';

import Loader from '../common/Loader/Loader';
import CryptoListing from '../CryptoListing/CryptoListing';
import './CryptoListings.css';

function CryptoListings({isLoading, topFive, aragonANT}) {
  return (
    <>
      <h3 className="currency-list-header">Priciest Cryptos Currently</h3>
      {topFive === [] ? (
        <Loader />
      ) : (
        topFive.map(({id, symbol, name, quote}) => (
          <CryptoListing
            key={id}
            name={name}
            symbol={symbol}
            price={quote.USD.price}
          />
        ))
      )}

      <h3>Aragon ANT</h3>
      {aragonANT === {} ? (
        <loader />
      ) : (
        <CryptoListing
          name={aragonANT.name}
          price={aragonANT.quote?.USD.price}
          symbol={aragonANT.symbol}
        />
      )}
    </>
  );
}

CryptoListings.defaultProps = {
  topFive: [],
  aragonANT: {},
};

CryptoListings.propTypes = {
  topFive: PropTypes.array.isRequired,
  aragonANT: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default CryptoListings;
