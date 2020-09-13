import Head from 'next/head'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);
// const web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.infura.io/v3/8d1234baedad4a588a49a51ac993aaf8'));

const StyledWrapper = styled.body`

font-family: 'Poppins', sans-serif;

`


const Home = () => {

  const [network, setNetwork] = useState('');
  const [userAccount, setUserAccount] = useState('');
  const [warning, setWarning] = useState('');
  const [Balance, setBalance] = useState(0);

  useEffect(() => {
    // Get current network
    if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();
    }
    startApp();
  }, [])

  const startApp = async () => {
    // Get current network
    web3.eth.net.getId().then(netId => {
      console.log('netId: ' + netId)
      switch (netId) {
        case 1:
          setNetwork('Mainnet');
          setWarning('please switch your network to Kovan');
          break
        case 2:
          setNetwork('Deprecated Morden');
          setWarning('please switch your network to Kovan');
          break
        case 3:
          setNetwork('Ropsten');
          setWarning('please switch your network to Kovan');
          break
        case 4:
          setNetwork('Rinkeby');
          setWarning('please switch your network to Kovan');
          break
        case 42:
          setNetwork('Kovan');
          break
        default:
          setNetwork('Unknow');
          setWarning('please switch your network to Kovan');
      }
    })

    web3.eth.getAccounts().then(accounts => {
      setUserAccount(accounts[0]);
      console.log(accounts[0]);
      reloadInfo();
    })
    // Get Account 

  }

  const reloadInfo = async () => {
    try {

      getBalance();

    }
    catch (err) {
      console.log(err)
    }
  }


  const getBalance = () => {
    web3.eth.getAccounts().then(accounts => {
      web3.eth.getBalance(accounts[0]).then(result => {
        setBalance(web3.utils.fromWei(result));
      })
    })
  }


  return (
    <StyledWrapper>
      <main>
        <h1>SEND ETH</h1>
        <p >
          <span>Network: </span>
          <span >{network}</span>
        </p>
        <p >
          <span >{warning}</span>
        </p>
        <p >
          <span>Wallet </span>
          <span >Account : {userAccount}</span>
        </p>
        <p >
          <span>Balance: </span>
          <span >{Balance}</span>
        </p>

        <h1>FROM</h1>
        <input />
        <h1>TO</h1>
        <input />
        <h1>Amount</h1>
        <input />
        <p>
          <button>Submit</button>
        </p>

      </main>
    </StyledWrapper>
  );

}




export default Home;





