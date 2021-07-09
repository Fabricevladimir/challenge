import Web3 from 'web3';
import {useState} from 'react';

import ERC20ABI from '../services/Contracts/ERC20.json';
import {ERC20Address} from '../services/Contracts/constants';

function useERC20() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);
  const [contract, setContract] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [connection, setConnection] = useState();
  const [totalTokens, setTotalTokens] = useState(0);
  const [tokenSymbol, setTokenSymbol] = useState('');

  /************************************
   * Private Functions
   ************************************/
  async function init() {
    setIsLoading(true);

    // get connection/provider
    const web3 = new Web3(Web3.givenProvider);
    setConnection(web3);

    // get account
    const currentAccount = await getAccount(web3);
    setAccount(currentAccount);

    // get balance
    const currentBalance = await getCurrentBalance(web3, currentAccount);
    setBalance(currentBalance);

    // get contract
    const currentContract = await getContract(web3, ERC20ABI, ERC20Address);
    currentContract.defaultAccount = currentAccount;
    setContract(currentContract);

    // get tokens
    const tokens = await getTotalTokens(currentContract);
    setTotalTokens(tokens);

    setTokenSymbol(await getTokenSymbol(currentContract));

    setIsLoading(false);
  }

  async function getAccount(web3) {
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
  }

  async function getCurrentBalance(web3, currentAccount) {
    return Web3.utils.fromWei(
      await web3.eth.getBalance(currentAccount),
      'ether'
    );
  }

  async function getContract(web3, abi, contractAddress) {
    return await new web3.eth.Contract(abi, contractAddress);
  }

  async function getTotalTokens(contract) {
    return contract.methods.totalSupply().call();
  }

  async function getTokenSymbol(contract) {
    return contract.methods.symbol().call();
  }

  async function getTokens(tokenAmount) {}

  async function transferTokens(addressTo, amount) {
    contract.methods.transfer(account, amount).send();
  }

  return {
    init,
    account,
    balance,
    isLoading,
    getTokens,
    totalTokens,
    tokenSymbol,
    transferTokens,
  };
}

export {useERC20};
