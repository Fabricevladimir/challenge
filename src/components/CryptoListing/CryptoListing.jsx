import React from 'react';
import PropTypes from 'prop-types';

import {formatUSD} from '../../utils/utils';

function CryptoListing({name, symbol, price}) {
  return (
    <p className="currency">{`${name} (${symbol}) - ${formatUSD(price)}`}</p>
  );
}

CryptoListing.defaultProps = {
  name: '',
  symbol: '',
  price: 0,
};

CryptoListing.propTypes = {
  name: PropTypes.string,
};

export default CryptoListing;
