import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../Item";
import db from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";

const ProductList = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  const getProducts = async () => {
    const ItemsCollection = collection(db, "productos");
    const productosSnapshot = await getDocs(ItemsCollection);
    console.log("snap de productos", productosSnapshot);
    const productsDb = productosSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      console.log("producto:", product);
      return product;
    });
    return productsDb;
  };

  useEffect(() => {
    setItems([]);
    getProducts().then((productos) => {
      category ? filterCategory(productos, category) : setItems(productos);
    });
  }, [category]);

  const filterCategory = (array, category) => {
    return array.map((product, i) => {
      if (product.category === category) {
        return setItems((products) => [...products, product]);
      }
    });
  };

  return (
    <div className="cardContainer">
      <div className="cardContainer__div">
        {items.map((item) => {
          const { id } = item;
          return <ItemCard props={item} key={id} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
