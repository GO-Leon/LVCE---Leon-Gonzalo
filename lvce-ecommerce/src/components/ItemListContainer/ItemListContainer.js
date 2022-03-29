import { dividerClasses } from '@mui/material';
import React,{useState, useEffect} from 'react'
import ItemCard from '../Item'
import { itemList } from './ItemList'

const ProductList = () => {
    const [items, setItems] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(itemList);
        }, 2000);
      });

      const getItemList = async () => {
        try {
          const res = await getProducts;
          console.log('Productos cargados con exito')
          setItems(res);
        } catch (err) {
          console.log(err);
        }
      };

    useEffect(() => {
        getItemList();
      }, []);
      

    return (
        <div className="cardContainer">
            <h2>Productos Destacados</h2>
            {items.map( ( item ) => {
                const {id} = item
                return(
                    <ItemCard props={item} key={id}/>
                )
            })}
        </div>


      );







}

export default ProductList