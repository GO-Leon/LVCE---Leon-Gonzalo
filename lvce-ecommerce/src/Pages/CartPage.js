import * as React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../components/Context/CartContext";

const CartPage = () => {
  const { cartProducts, deleteProduct, totalCart } = useContext(CartContext);

  return (
    <div className="cartPage__col">
      <div className="cartPage--row">
        <h3>Producto</h3>
        <h3>Tipo</h3>
        <h3>Cantidad</h3>
        <h3>Precio</h3>
      </div>
      <div className="cartPage__detail--col">
        {cartProducts.length >= 1 ? (
          <div>
            {cartProducts.map((cartProduct) => {
              console.log("carrito", cartProducts);
              return (
                <div className="cartPage__detail--row">
                  <section className="cartPage__detailImg">
                    <div>
                      <DeleteIcon
                        onClick={() => deleteProduct(cartProduct.item.id)}
                      />
                    </div>
                    <img src={`../../${cartProduct.item.img}`} />
                    <p>{cartProduct.item.title}</p>
                  </section>
                  <p>{cartProduct.item.category}</p>
                  <p>{cartProduct.quantity}</p>
                  <p>$ {cartProduct.item.price}</p>
                  <Divider />
                </div>
              );
            })}
            <h2>Total ${totalCart()}</h2>
          </div>
        ) : (
          <div className="noProducts__cart">
            <h2>No hay productos en tu lista</h2>
            <Link to="/productos" className="getProducts__link">
              Ver productos
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
