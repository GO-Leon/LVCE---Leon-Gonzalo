import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../media/logo.png';
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navBar">
            <div className="navLogo">
                 <img src={logo} className="App-logo" alt="logo" />
              <h2>La Vida Color Essen</h2>
            </div>
            <div className="navItems">
              <Button variant="outlined">Home</Button>
              <Button variant="outlined">Productos</Button>
              <Button variant="outlined">Nosotros</Button>
              <Button variant="outlined">Contacto</Button>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
