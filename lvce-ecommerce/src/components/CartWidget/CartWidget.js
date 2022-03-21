import CartLogo from '../../media/shopping-cart.png';
export default function CartWidget(){
    return (
        <section className='navCart'>
            <img src={CartLogo} className="cartLogo" alt="carrito" />
            <p>1</p>
            
        </section>

    );
}