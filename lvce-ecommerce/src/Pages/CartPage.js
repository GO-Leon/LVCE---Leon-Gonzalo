import * as React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../components/Context/CartContext";
import { Button } from "@mui/material";
import ModalCart from "../components/Modal/ModalCart";
import db from "../Firebase";

const CartPage = () => {
  const currentDate = new Date();
  const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;
  const { cartProducts, deleteProduct, totalCart, clearCart } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',  
    email: '',
})
  const [order, setOrder] = useState(
    {
      buyer: formData,
      items: cartProducts.map( (cartProduct)=> {
        return {
          id: cartProduct.item.id,
          title: cartProduct.item.title,
          price: cartProduct.item.price
        }
      }),
      total: totalCart(),
      fecha: date
    }
  )
  console.log("tu compra" , order)

  const [successOrder, setSuccessOrder] = useState()

  const handleSubmit = (e) => {
      e.preventDefault()
      let prevOrder = {...order,
          buyer: formData
      }
      setOrder({...order,
          buyer: formData})
      pushOrder(prevOrder)
  }

  const pushOrder = async (prevOrder) => {
      const orderFirebase = collection(db, 'orders')
      const orderDoc = await addDoc(orderFirebase, prevOrder)
      setSuccessOrder(orderDoc.id)
      console.log("orden guardada: ", orderDoc.id)
      
  }

  const handleChange = (e) => {
      const {value, name} = e.target

      setFormData({
          ...formData,
          [name]: value
      })
  }



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
            <section className="cartPage__bottom">
              <Button onClick={() => setOpenModal(true)}>Continuar compra</Button>
              <Button onClick={() => clearCart()}>Borrar todo</Button>
            </section>
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
      <ModalCart handleClose={() => setOpenModal(false)} open={openModal}>
          {successOrder ? (
            <div className="modalCart">
              <h3>Orden generada correctamente</h3>
              <p>Su numero de orden es: {successOrder}</p>
            </div>
            ) : (
              <div className="modalCart">
             <h2>Datos para contacto</h2>
              <form onSubmit={handleSubmit} className="modalCart__form">
                            <input type="text" name='name' placeholder='Nombre completo' 
                                onChange={handleChange} 
                                value={formData.name}
                            />
                            <input type="number" name='phone' placeholder='Telefono' 
                                onChange={handleChange} 
                                value={formData.phone}
                            />
                            <input type="mail" name='email' placeholder='Ingrese su email' 
                                onChange={handleChange} 
                                value={formData.email}
                            />

                            <Button type="submit" className="form__btn">Enviar</Button>
              </form>
              </div>
                )}
                
            </ModalCart>
    </div>
  );
};

export default CartPage;
