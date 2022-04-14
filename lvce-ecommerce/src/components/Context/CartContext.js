import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const addToCart = (product, countCart) => {
    if (isInCart(product.id)) {
      alert(
        `El producto ya se encuentra en el carrito, antes agregaste ${countCart} ${product.title} al carrito`
      );
    } else {
      console.log(`Agregaste ${countCart} ${product.title}`);
      const newInCart = {
        item: product,
        quantity: countCart,
      };
      setCartProducts([...cartProducts, newInCart]);
    }
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  const deleteProduct = (id) => {
    const cartUpdate = cartProducts.filter((element) => element.item.id !== id);
    setCartProducts(cartUpdate);
  };

  const isInCart = (id) => {
    return cartProducts.find((element) => element.item.id === id);
  };

  const quantity = () => {
    return cartProducts.reduce((acum, item) => (acum += item.quantity), 0);
  };

  const totalCart = () => {
    return cartProducts.reduce(
      (acum, item) => (acum = acum + item.price * item.quantity),
      0
    );
  };

  console.log(cartProducts);
  const data = {
    cartProducts,
    addToCart,
    deleteProduct,
    isInCart,
    clearCart,
    quantity,
    totalCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;
