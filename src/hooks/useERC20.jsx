import {ethers} from 'ethers';
import {useState} from 'react';

import ERC20ABI from '../services/Contracts/ERC20.json';
import {ERC20Address} from '../services/Contracts/constants';

// Could also set these in context
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(ERC20Address, ERC20ABI, signer);

function useERC20() {
  const [account, setAccount] = useState('');
  const [balance, setbalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [totalSupply, setTotalSupply] = useState(0);
  const [tokenSymbol, setTokenSymbol] = useState('');

  /************************************
   * Helper Functions
   ************************************/
  async function fetchData(event) {
    setIsLoading(true);
    event.preventDefault();

    try {
      // request account
      await window.ethereum.request({method: 'eth_requestAccounts'});

      setAccount(await signer.getAddress());

      setbalance(await contract.balanceOf(await signer.getAddress()));

      setTokenSymbol(await contract.symbol());

      const totalSupply = await contract.totalSupply();
      setTotalSupply(ethers.utils.formatEther(totalSupply));
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }

  async function mintTokens(tokensToMint) {
    try {
      await contract.mint(tokensToMint);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }

  async function transferTokens(destination, amount) {}

  return {
    account,
    balance,
    fetchData,
    isLoading,
    mintTokens,
    totalSupply,
    tokenSymbol,
    transferTokens,
  };
}

export {useERC20};
