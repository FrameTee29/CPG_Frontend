import Head from 'next/head'
import { useState, useEffect } from 'react';
const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require("web3");
// const web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.infura.io/v3/8d1234baedad4a588a49a51ac993aaf8'));
const web3 = new Web3(Web3.givenProvider);

export default function Home() {

  const [network, setNetwork] = useState('');
  const [userAccount, setUserAccount] = useState('');
  const [warning, setWarning] = useState('');

  
  useEffect(()=>{
    startApp();
  },[])

  const startApp =()=>{
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
      console.log(accounts[0])
    })
  }

  return (
    <div className="container">
      <Head>
        <title>Cryptocurrency Payment Gateway</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>SEND ETH</h1>

        <p class="p_network">
          <span>Network: </span>
          <span id="eth_network">{network}</span>
        </p>
        <p class="p_warning">
          <span id="warning">{warning}</span>
        </p>

        <h1>FROM</h1>
        <input />
        <h1>TO</h1>
        <input />
        <h1>Amount</h1>
        <input />
        <button>Submit</button>
      </main>
    </div>
  )
}
