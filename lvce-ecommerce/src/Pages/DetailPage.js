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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function DetailPage() {
  const { id, category } = useParams();
  const [product, setProduct] = useState({});
  const [fullCart, setFullCart] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [openSnack, setOpenSnack] = React.useState(false);

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
    console.log("es estaaaaaaaaaaaaa")
    addSnack()
    
  };

  const addSnack = () => {
    setOpenSnack(true);
    setTimeout( () => {
      setOpenSnack(false)
    }, 2000);
  }

  const goToCart = () => {
    navigate(`/cart`);
  };

  const AlertCart = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


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
                <ItemCount onAdd={onAdd} stockDetail={product.stock} />
              )}
            </section>
          </div>
        </>
      )}
      <Snackbar open={openSnack} autoHideDuration={6000}>
        <AlertCart severity="success" sx={{ width: '100%' }}>
        {product.title} agregado al carrito !
        </AlertCart>
      </Snackbar>
    </div>
  );
}

export default DetailPage;
