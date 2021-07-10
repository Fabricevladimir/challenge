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

      await updatecurrentBalance();

      setTokenSymbol(await contract.symbol());

      const totalSupply = await contract.totalSupply();
      setTotalSupply(ethers.utils.formatUnits(totalSupply, 18));

      // Subscribe
      contract.on('Transfer', (from, to, amount) => {
        //TODO - set log window
        console.log(`${from} sent ${formatEther(amount)} to ${to},`);
      });

      contract.on('Approval', (from, to, amount) => {
        //TODO - set log window
        console.log(`${from} sent ${formatEther(amount)} to ${to},`);
      });

      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }

  async function mintTokens(tokensToMint) {
    try {
      const tx = await contract.mint(ethers.utils.parseUnits(tokensToMint, 18));
      await tx.wait();
      updatecurrentBalance();
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }

  async function updatecurrentBalance() {
    const currentBalance = await contract.balanceOf(await signer.getAddress());
    setBalance(ethers.utils.formatUnits(currentBalance, 18));
  }

  async function transferTokens(amount) {
    setIsLoading(true);
    if (amount > balance) {
      throw new Error(
        'Trying to send more tokens than currently in the balance'
      );
    }

    try {
      // generate new wallet;
      const receiver = ethers.Wallet.createRandom();

      // show wallet info
      setDestinationAddress(receiver.address);
      let receiverBalance = await contract.balanceOf(receiver.address);
      setDestinationBalance(ethers.utils.formatUnits(receiverBalance, 18));

      // complete transaction
      const tx = await contract.transfer(
        receiver.address,
        ethers.utils.parseUnits(amount, 18)
      );

      await tx.wait();

      // update balance
      receiverBalance = await contract.balanceOf(receiver.address);
      setDestinationBalance(ethers.utils.formatUnits(receiverBalance, 18));
      await updatecurrentBalance();

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
