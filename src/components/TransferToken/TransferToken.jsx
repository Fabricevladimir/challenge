import React, {useState} from 'react';
import './TransferToken.css';

function TransferToken({onTransferToken, isLoading, balance}) {
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

      <label htmlFor="transfer-token-input">Destination:</label>
      <input
        id="transfer-token-input"
        type="text"
        value={destinationAddress}
        onChange={(e) => setDestinationAddress(e.target.value)}
      />
      <p>{`Destination balance: ${balance}`}</p>
      <button
        type="button"
        onClick={(e) => onTransferToken(tokens, destinationAddress)}
        disabled={isLoading}
        className="btn"
      >
        Transfer Tokens!
      </button>
    </div>
  );
}

export default TransferToken;
