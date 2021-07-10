import {useApi} from '@fabricefrancois/use-api';
import {useEffect} from 'react';

import Logger from '../components/Logger/Logger';
import Account from '../components/Account/Account';
import {useERC20} from '../hooks/useERC20';
import MintTokens from '../components/MintTokens/MintTokens';
import TransferToken from '../components/TransferToken/TransferToken';
import CryptoListings from '../components/CryptoListings/CryptoListings';

import {
  getTopFiveCryptoListings,
  getAragonAntTokenListing,
} from '../services/marketService';

import './styles/Dashboard.css';

function Dashboard() {
  const {
    log,
    account,
    balance,
    fetchData,
    isLoading,
    mintTokens,
    tokenSymbol,
    totalSupply,
    transferTokens,
    destinationBalance,
  } = useERC20();

  const aragon = useApi(getAragonAntTokenListing);
  const topFive = useApi(getTopFiveCryptoListings);

  useEffect(() => {
    aragon.request();
    topFive.request();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Account
        account={account}
        balance={balance}
        isLoading={isLoading}
        tokenSymbol={tokenSymbol}
        totalSupply={totalSupply}
        onFetchData={fetchData}
      />

      <MintTokens onMintTokens={mintTokens} isLoading={isLoading} />

      <TransferToken
        onTransferToken={transferTokens}
        isLoading={isLoading}
        balance={destinationBalance}
      />
      <Logger logs={log} />
      <CryptoListings
        topFive={topFive.data.data}
        aragonANT={aragon.data.data?.ANT}
        isLoading={aragon.isLoading || topFive.isLoading}
      />
    </div>
  );
}

export default Dashboard;
