import Head from 'next/head'
import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Transaction } from 'ethereumjs-tx';
const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);
// const web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.infura.io/v3/8d1234baedad4a588a49a51ac993aaf8'));

const StyledWrapper = styled.body`

font-family: 'Poppins', sans-serif;
button,input{
  width:500px;
}
.Status_font{
  color:#49FF33;
}
.warring{
  color:red;
}
.balance{
  color:blue;
}
.key{
  color:gray;
}

`


const Home = () => {

  const [network, setNetwork] = useState('');
  const [userAccount, setUserAccount] = useState('');
  const [warning, setWarning] = useState('');
  const [Balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('0.00001');
  const [link, setLink] = useState("-");
  const [status, setStatus] = useState("-");

  useEffect(() => {
    // Get current network
    // if (window.web3) {
    //   window.web3 = new Web3(window.web3.currentProvider);
    //   window.ethereum.enable();
    //   startApp();
    // }

    if (window.web3) {
      console.log(window.web3)
      try {
        window.ethereum.enable().then(result => {
          startApp();
        });
      }
      catch (err) {
        console.log(err)
      }
    }

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

  // Get balance
  const getBalance = () => {
    web3.eth.getAccounts().then(accounts => {
      web3.eth.getBalance(accounts[0]).then(result => {
        setBalance(web3.utils.fromWei(result));
      })
    })
  }

  // ETH transfer
  const etherTransfer = () => {

    let toAddress = "0x6bc0b407Bb71b3e05091cD3837D0C3430764adc5";
    let amountInText = amount;

    console.log("ผู้โอน = " + toAddress);
    console.log("จำนวนเหรียญ = " + amountInText);

    let sender = userAccount;
    let amountcoin = web3.utils.toWei(amountInText, "ether");
    web3.eth.sendTransaction(
      {
        from: sender,
        to: toAddress,
        value: amountcoin
      }
    ).on('error', (error) => {
      console.error(error)
    }).on('transactionHash', (transactionHash) => {
      console.log(transactionHash)
      setLink("https://" + network.toLowerCase() + ".etherscan.io/tx/" + transactionHash);
    }).on('confirmation', (confirmationNumber, receipt) => {
      console.log('confirmationNumber', confirmationNumber)
      console.log(receipt);

      setStatus("Success");
      callback(ok);
    })



  }


  return (
    <StyledWrapper>
      <main>
        <h1>SEND ETH</h1>
        <p >
          <h3>
            <span>Network: </span>
            <span className="key">{network}</span>
          </h3>
        </p>
        <p >
          <h3 className="warring"><span >{warning}</span></h3>
        </p>
        <p >
          <h3>
            <h2>Wallet </h2>
            <span >Account :</span>
            <span className="key">{userAccount}</span>
          </h3>
        </p>
        <p >
          <h2>
            <span>Balance: </span>
            <span className="balance">{Balance}</span>
          </h2>
        </p>

        <h1>FROM</h1>
        <input value={userAccount} />
        <h1>TO</h1>
        <input value="FrameTee Company" />
        <h1>Amount</h1>
        <input value={amount} onChange={e => setAmount(e.target.value)} />
        <p>
          <button onClick={etherTransfer}>Submit</button>
        </p>
        <p >
          <span>Your pending Transaction:</span>
          <span ><a target="_blank" href={link}>{link}</a></span>
        </p>
        <p >
          <span>Status:</span>
          <span className="Status_font">{status}</span>
        </p>

      </main>
    </StyledWrapper>
  );

}




export default Home;





