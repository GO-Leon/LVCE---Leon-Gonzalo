import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';

//import './styles/ItemCount.css';

const ItemCount = ({ onAdd }) => {
  const initial = 1;
  const stock = 4; 

  //hook de estado
  const [totalItem, setTotalItem] = useState(initial);

  const addItem = (num) => {
    setTotalItem(totalItem + num);
  };

  return (
    <div className="countContainer">
      <div className="countContainer__div">
        <button
          onClick={() => addItem(-1)}
          disabled={totalItem === initial ? true : null}
        >
          -
        </button>
        <h3>{totalItem}</h3>
        <button
          onClick={() => addItem(+1)}
          disabled={totalItem === stock ? true : null}
        >
          +
        </button>
      </div>
      <Button variant="contained" className="addCartButton"
        onClick={() => onAdd(totalItem)}
        disabled={stock === 0 ? true : null}
        sx={{ marginBottom:1, backgroundColor:'#fcabae'}}
        >
        Agregar
        </Button>
    </div>
  );
};

export default ItemCount;