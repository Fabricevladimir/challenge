import React, {useState} from 'react';

import './TransferToken.css';

function TransferToken({onTransferToken}) {
  const [tokensToTransfer, setTokensToTransfer] = useState(0);
  const [destinationAddress, setDestinationAddress] = useState('');

  return (
    <div className="transfer-token-functionality">
      <label htmlFor="transfer-token-input">Tokens to transfer:</label>
      <input
        id="transfer-token-input"
        type="text"
        value={tokensToTransfer}
        onChange={(e) => setTokensToTransfer(e.target.value)}
      />

      <label htmlFor="destination-input">Destination address:</label>
      <input
        id="destination-input"
        type="text"
        value={destinationAddress}
        onChange={(e) => setDestinationAddress(e.target.value)}
      />
      <button
        className="btn"
        type="button"
        onClick={() => onTransferToken(tokensToTransfer)}
      >
        Transfer Tokens!
      </button>
    </div>
  );
}

export default TransferToken;
