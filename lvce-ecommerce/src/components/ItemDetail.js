import * as React from 'react';
import ItemCount from './ItemCount';

const onAdd = (totalItem) => {
    alert(`Agregaste ${totalItem} productos`);
  };



export default function ShowItemDetails({props}) {
  const { title, price, brand, detailImg, stock, id, detail  } = props
  return (
      <div className='detailItems__container'>
          <img src={`./${detailImg}`} alt="{img}" />
          <div className='detailItems__container--column'>
              <h1>{title}</h1>
              <h2>$ {price}</h2>
              <p>{detail}</p>
              <section className='detailItems__buy'>
                <ItemCount onAdd={onAdd} />
              </section>
            </div>
      </div>

  );
}