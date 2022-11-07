import React from 'react';
import { useState, useEffect} from 'react'
import { ethers } from "ethers"
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import Header from './components/Header';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

declare global {
  interface Window {
      ethereum:any;
  }
}

const App = () => {
  const [balance, setBalance] = useState<string | undefined>()
  const [currentAccount, setCurrentAccount] = useState<string | undefined>()
  const [chainId, setChainId] = useState<number | undefined>()
  const [chainname, setChainName] = useState<string | undefined>()

  useEffect(() => {
    if(!currentAccount || !ethers.utils.isAddress(currentAccount)) return
    //client side code
    if(!window.ethereum) return
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    provider.getBalance(currentAccount).then((result)=>{
      setBalance(ethers.utils.formatEther(result))
    })
    provider.getNetwork().then((result)=>{
      setChainId(result.chainId)
      setChainName(result.name)
    })

  },[currentAccount])

  const connect = () => {
    console.log('connect wallet');
    if(!window.ethereum) {
      console.log("please install MetaMask")
      return
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum)

    // MetaMask requires requesting permission to connect users accounts
    provider.send("eth_requestAccounts", [])
    .then((accounts)=>{
      if(accounts.length>0) setCurrentAccount(accounts[0])
    })
    .catch((e)=>console.log(e))
  }

  const disconnect = () => {
    console.log("wallet disconnect")
    setBalance(undefined)
    setCurrentAccount(undefined)
  }

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          <Header walletConnected={ currentAccount !== undefined } balance={balance} address={currentAccount} connect={connect} disconnect={disconnect}></Header>
        </div>
      </ThemeProvider>
    </Stack>
  );
}

export default App;
