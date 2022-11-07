import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import logo from '../logo.svg';

interface HeaderProps {
  walletConnected: boolean
  balance?: string
  address?: string
  disconnect: () => void
  connect: () => void
}


const Header = ({ walletConnected, balance, address, disconnect, connect }: HeaderProps) => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} className="App-logo" alt="logo"/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Poker
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Poker
          </Typography>
          
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center', gap: 5 }}>
              {
                walletConnected ? <>
                <Typography>Account: { address }</Typography>
                <Typography>Balance: { balance }</Typography>
                <Button onClick={disconnect}>Disconnect</Button>
                </>: <><Button onClick={connect}>Connect</Button></>
              }
            </Box>
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};


export default Header;
