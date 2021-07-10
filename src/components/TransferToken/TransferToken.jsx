import React, {useState} from 'react';

import './TransferToken.css';

function TransferToken({onTransferToken, isLoading}) {
  const [tokens, setTokens] = useState(0);
  const [destinationAddress, setDestinationAddress] = useState('');

  return (
    <div className="transfer-token-functionality">
      <label htmlFor="transfer-token-input">Tokens to transfer:</label>
      <input
        id="transfer-token-input"
        type="text"
        value={tokens}
        onChange={(e) => setTokens(e.target.value)}
      />

      <label htmlFor="destination-input">Destination address:</label>
      <input
        id="destination-input"
        type="text"
        value={destinationAddress}
        onChange={(e) => setDestinationAddress(e.target.value)}
      />
      <button
        type="button"
        onClick={() => onTransferToken(destinationAddress, tokens)}
        disabled={isLoading}
        className="btn"
      >
        Transfer Tokens!
      </button>
    </div>
  );
}

export default TransferToken;
