import * as React from 'react';
import Button from '@mui/material/Button';
import ItemCount from '../components/ItemCount';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { itemList } from '../components/ItemListContainer/ItemList';
import { useNavigate } from 'react-router-dom';



const DetailPage = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})
    const [fullCart, setFullCart] = useState(false);
    const navigate = useNavigate();


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


    const onAdd = (countCart) => {
        alert(`Agregaste ${countCart} ${product.title}`);
        setFullCart(true);
    };

    const goToCart = () => {
        navigate(`/cart`)
    }



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
                {fullCart ? <Button variant="contained" className="fullCartButton" onClick={goToCart}>Finalizar Compra</Button> : <ItemCount onAdd={onAdd} />}
            </section>
          </div>
    </div>
)
}

export default DetailPage