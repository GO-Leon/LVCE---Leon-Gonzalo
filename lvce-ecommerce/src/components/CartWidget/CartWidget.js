import * as React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import CartLogo from '../../media/shopping-cart.png';
import { CartContext } from '../Context/CartContext';


const CartWidget = () => {
    const { cartProducts, deleteProduct, clearCart } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    console.log("cartProducts: ", cartProducts)

    return (
        <div>
            <section className='navCart'>
            <img src={CartLogo} className="cartLogo" alt="carrito" 
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            />
            <p>{cartProducts.length}</p>
            </section>
            <Menu
                anchorEl={anchorEl}
                className='cartModal'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                <p>Tus Articulos</p>
                <Divider />
                {cartProducts.map( (cartProduct) => {
                    return(
                        <div className='cartList' key={cartProduct.item.id}>
                            <div className='cartList__img'>
                                <img  src={`../../${cartProduct.item.img}`} /> 
                            </div>
                            <div className='cartList__info'>
                                <p>{cartProduct.item.title}  </p>
                                <p>Cantidad: {cartProduct.quantity}  </p>
                                <span> $ {cartProduct.item.price}</span>
                            </div>
                            <div>
                                <DeleteIcon onClick={() => deleteProduct(cartProduct.item.id)}/>
                            </div>
                        </div>
                    )
                })}
                
                <Divider />
                <div>
                    <Button><Link to="/cart">Terminar Compra</Link></Button>
                    <Button onClick={() => clearCart()} >Limpiar Articulos</Button>
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget