import {ethers} from 'ethers';
import {useState} from 'react';
import {formatEther} from 'ethers/lib/utils';

import ERC20ABI from '../services/Contracts/ERC20.json';
import {ERC20Address} from '../services/Contracts/constants';

// Could also set these in context
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(ERC20Address, ERC20ABI, signer);

function useERC20() {
  const [log, addToLog] = useState([]);
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [totalSupply, setTotalSupply] = useState(0);
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [destinationBalance, setDestinationBalance] = useState('');

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

      setBalance(await contract.balanceOf(await signer.getAddress()));

      setTokenSymbol(await contract.symbol());

      const totalSupply = await contract.totalSupply();
      setTotalSupply(ethers.utils.formatEther(totalSupply));

      subscribe();

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

  function subscribe() {
    // subscribe to events
    contract.on('Transfer', (from, amount, event, to) => {
      addToLog([...log, `${from} sent ${formatEther(amount)} to${to}`]);
    });

    contract.on('Approval', (from, amount, event, to) => {
      addToLog([...log, `${from} sent ${formatEther(amount)} to${to}`]);
    });
  }

  async function transferTokens(amount, destinationAddress) {
    setIsLoading(true);
    if (amount > balance) {
      throw new Error(
        'Trying to send more tokens than currently in the balance'
      );
    }

    try {
      setDestinationAddress(destinationAddress);
      setDestinationBalance(await contract.balanceOf(destinationAddress));
      const tx = await contract.transfer(
        destinationAddress,
        ethers.utils.parseUnits(amount, 18)
      );

      await tx.wait();
      setDestinationBalance(destinationAddress);
      setBalance(await contract.balanceOf(await signer.getAddress()));
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
      setIsLoading(false);
    }
  }

  return {
    account,
    balance,
    contract,
    fetchData,
    isLoading,
    mintTokens,
    totalSupply,
    tokenSymbol,
    transferTokens,
    destinationAddress,
    destinationBalance,
  };
}

export {useERC20};
