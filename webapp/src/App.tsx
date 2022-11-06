import React from 'react';
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

const App = () => {
  const connect = () => {
    console.log('connect wallet');
  }

  const disconnect = () => {
    console.log('disconnect wallet');
  }

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          <Header walletConnected={true} balance={"10 ETH"} address={"address-test"} connect={connect} disconnect={disconnect}></Header>
        </div>
      </ThemeProvider>
    </Stack>
  );
}

export default App;
