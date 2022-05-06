import * as React from "react";
import Button from "@mui/material/Button";
import ItemCount from "../components/ItemCount";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../components/Context/CartContext";
import db from "../Firebase";
import { doc, getDoc, getDocs } from "firebase/firestore";
import loadLogo from "../media/loading.gif";

function DetailPage() {
  const { id, category } = useParams();
  const [product, setProduct] = useState({});
  const [fullCart, setFullCart] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
    setLoading(true);
    getProduct().then(() => {
      setLoading(false);
    });
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
      {loading ? (
        <div className="loadingScreen__detail">
          <img src={loadLogo} alt="loading" />
        </div>
      ) : (
        <>
          <img
            src={`../../${product.detailImg}`}
            alt="{img}"
            className="mainImg"
          />
          <div className="detailItems__container--column">
            <h1>{product.title}</h1>
            <h3 className="info__subtitle">Linea</h3>
            <ul className="productColor">
              {product.colors?.map((color) => {
                return (
                  <Link
                    to={`/${product.category}/${color.id}`}
                    style={{ background: `${color.hex}`, border:`${color.active}` }}
                    className="detailColors" 
                  >
                    {" "}
                    {color.brand}{" "}
                  </Link>
                );
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
        </>
      )}
    </div>
  );
}

export default DetailPage;
