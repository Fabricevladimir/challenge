import React from 'react';

import './Account.css';

function Account({
  account,
  balance,
  isLoading,
  tokenSymbol,
  totalSupply,
  onFetchData,
}) {
  return (
    <div className="account-container">
      <div className="account">
        <p>{`Account: ${account}`}</p>
        <p>{`Balance: ${balance} ${tokenSymbol}`}</p>
        <p>{`Total Tokens: ${totalSupply} ${tokenSymbol}`}</p>
      </div>

      <div className="btn-container">
        <button
          type="button"
          onClick={onFetchData}
          disabled={isLoading}
          className="btn"
        >
          Connect to Metamask
        </button>
      </div>
    </div>
  );
}

export default Account;
