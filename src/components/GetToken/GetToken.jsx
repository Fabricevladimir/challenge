import React, {useState} from 'react';

import './GetToken.css';

function GetToken({onGetToken}) {
  const [tokens, setTokens] = useState(0);
  return (
    <div className="get-token-functionality">
      <label htmlFor="get-token-input">Get Tokens</label>
      <input
        id="get-token-input"
        type="text"
        value={tokens}
        onChange={(e) => setTokens(e.target.value)}
      />
      <button className="btn" type="button" onClick={() => onGetToken(tokens)}>
        Get Tokens!
      </button>
    </div>
  );
}

export default GetToken;
