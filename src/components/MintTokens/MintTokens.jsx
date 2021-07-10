import {useState} from 'react';

import './MintTokens.css';

function MintTokens({onMintTokens, isLoading}) {
  const [tokens, setTokens] = useState(0);

  return (
    <div className="mint-token-functionality">
      <label htmlFor="mint-token-input">Tokens to generate</label>
      <input
        id="mint-token-input"
        type="text"
        value={tokens}
        onChange={(e) => setTokens(e.target.value)}
      />
      <button
        type="button"
        onClick={() => onMintTokens(tokens)}
        disabled={isLoading}
        className="btn"
      >
        Mint Tokens!
      </button>
    </div>
  );
}

export default MintTokens;
