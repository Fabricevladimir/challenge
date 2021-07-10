import React, {useState} from 'react';
import './TransferToken.css';

function TransferToken({onTransferToken, isLoading, balance, address}) {
  const [tokens, setTokens] = useState(0);

  return (
    <div className="transfer-token-functionality">
      <label htmlFor="transfer-token-input">Tokens to transfer:</label>
      <input
        id="transfer-token-input"
        type="text"
        value={tokens}
        onChange={(e) => setTokens(e.target.value)}
      />

      <p>{`Destination balance: ${balance}`}</p>
      <p>{`Destination address: ${address}`}</p>
      <button
        type="button"
        onClick={(e) => onTransferToken(tokens)}
        disabled={isLoading}
        className="btn"
      >
        Transfer Tokens!
      </button>
    </div>
  );
}

export default TransferToken;
