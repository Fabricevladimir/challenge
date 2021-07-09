import Loader from '../components/common/Loader/Loader';
import GetToken from '../components/GetToken/GetToken';
import TransferToken from '../components/TransferToken/TransferToken';
import {useERC20} from '../hooks/useERC20';
import './styles/Dashboard.css';

function Dashboard() {
  const {
    init,
    account,
    balance,
    getTokens,
    isLoading,
    totalTokens,
    tokenSymbol,
    transferTokens,
  } = useERC20();

  async function loadData() {
    await init();
  }

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="account-container">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="account">
            <p>{`Account: ${account}`}</p>
            <p>{`Balance: ${balance} ${tokenSymbol}`}</p>
            <p>{`Total Tokens: ${totalTokens} ${tokenSymbol}`}</p>
          </div>
        )}

        <div className="btn-container">
          <button
            type="button"
            onClick={loadData}
            disabled={isLoading}
            className="btn"
          >
            Connect to Metamask
          </button>
        </div>
      </div>
      {account !== '' && account !== null && (
        <>
          <GetToken onGetToken={getTokens} />
          <TransferToken onTransferToken={transferTokens} />
        </>
      )}
    </div>
  );
}

export default Dashboard;
