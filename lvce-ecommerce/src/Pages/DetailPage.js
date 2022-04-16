import * as React from "react";
import Button from "@mui/material/Button";
import ItemCount from "../components/ItemCount";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import { itemList } from "../components/ItemListContainer/ItemList";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../components/Context/CartContext";
import db from "../Firebase";
import { doc, getDoc, getDocs } from "firebase/firestore";

function DetailPage() {
  const { id, category } = useParams();
  const [product, setProduct] = useState({});
  const [fullCart, setFullCart] = useState(false);
  const navigate = useNavigate();

  const getProduct = async () => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("document data:", docSnap.data());
      let product = docSnap.data();
      product.id = docSnap.id;
      setProduct(product);
    } else {
      navigate(`/notFound`);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const { addToCart } = useContext(CartContext);

  const onAdd = (countCart) => {
    addToCart(product, countCart);
    setFullCart(true);
  };

  const goToCart = () => {
    navigate(`/cart`);
  };

  return (
    <div className="detailItems__container">
      <img src={`../../${product.detailImg}`} alt="{img}" />
      <div className="detailItems__container--column">
        <h1>{product.title}</h1>
        <p className="info__subtitle">Linea</p>
        <ul className="productColor">
          {product.colors?.map((color) => {
            return <li style={{ background: `${color.hex}` }}></li>;
          })}
        </ul>
        <h2>$ {product.price}</h2>
        <p>{product.detail}</p>
        <section className="detailItems__buy">
          {fullCart ? (
            <Button
              variant="contained"
              className="fullCartButton"
              onClick={goToCart}
            >
              Finalizar Compra
            </Button>
          ) : (
            <ItemCount onAdd={onAdd} />
          )}
        </section>
      </div>
    </div>
  );
}

export default DetailPage;
