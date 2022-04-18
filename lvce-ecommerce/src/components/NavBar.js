import * as React from 'react';
import { useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../media/logo.png';
import Button from '@mui/material/Button';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
const handleClose = () => {
    setAnchorEl(null);
};

const open = Boolean(anchorEl);


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
                                      page.title === 'Productos' ? (
                                        <section className='navItems__section'>
                                          <Button>
                                            <Link to={page.url}>{page.title}</Link>
                                          </Button>
                                          <Button>
                                            <KeyboardArrowDownIcon
                                                className='navItems__section--button'
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}>
                                            </KeyboardArrowDownIcon>
                                          </Button>


                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem onClick={handleClose}>
                                                    <Link to={'/Cocina'} className="navItems__MenuItem">Cocina</Link>
                                                </MenuItem>
                                                <MenuItem onClick={handleClose}>
                                                    <Link to={'/Complementos'} className="navItems__MenuItem">Complementos</Link>
                                                </MenuItem>
                                                <MenuItem onClick={handleClose}>
                                                    <Link to={'/Bazar'} className="navItems__MenuItem">Bazar Premium</Link>
                                                </MenuItem>
                                            </Menu> 
                                          </section>
                                        )

                  :(
                    <Button className="" variant="">
                    <Link to={page.url}>{page.title}</Link>
                    </Button>
                    ))
                })
              }
            </div>
            <Button>
              <CartWidget/>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
