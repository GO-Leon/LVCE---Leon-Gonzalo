import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../media/logo.png';
import Button from '@mui/material/Button';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar() {

  const navPages = [
    {
        title:'Home',
        url: '/'
    },
    {
        title:'Productos',
        url: '/productos'
    }, 
    {
        title: 'Nosotros',
        url: '/nosotros'
    },
    {
        title: 'Contacto',
        url: '/contacto'
    }]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navBar">
            <div>
              <Link to={'/'} className="navLogo">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>La Vida Color Essen</h2>
              </Link> 
            </div>
            <div className="navItems">
            {navPages.map((page) => {
                  return(
                    <Button className="" variant="">
                    <Link to={page.url}>{page.title}</Link>
                    </Button>
                    )
                })}
            </div>
            <Button>
              <CartWidget/>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
