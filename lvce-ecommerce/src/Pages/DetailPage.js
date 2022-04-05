import * as React from 'react';
import ItemCount from '../components/ItemCount';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { itemList } from '../components/ItemListContainer/ItemList';

const DetailPage = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})


    useEffect( () => {
        filterProductById(itemList, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }

    const onAdd = (totalItem) => {
        alert(`Agregaste ${totalItem} productos`);
    };



    return(
        <div className='detailItems__container'>
        <img src={`../../${product.detailImg}`} alt="{img}" />
        <div className='detailItems__container--column'>
            <h1>{product.title}</h1>
            <p className='info__subtitle'>Linea</p>
                <ul className='productColor'>
                    {product.colors?.map( (color) => {
                        return(
                            <li style={{background: `${color.hex}`}}></li>
                        )
                    })}                    
                </ul>
            <h2>$ {product.price}</h2>
            <p>{product.detail}</p>
            <section className='detailItems__buy'>
              <ItemCount onAdd={onAdd} />
            </section>
          </div>
    </div>
)
}

export default DetailPage