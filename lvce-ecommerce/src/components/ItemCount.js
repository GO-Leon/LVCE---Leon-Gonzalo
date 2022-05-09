import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

const ItemCount = ({ onAdd, stock }) => {
  const initial = 1;

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
          className={totalItem === initial ? "itemCount__btn--false" : "itemCount__btn"}
        >
          -
        </button>
        <h3>{totalItem}</h3>      
        <button
        onClick={() => addItem(+1)}
        disabled={totalItem === stock ? true : null}
        className={totalItem === stock ? "itemCount__btn--false" : "itemCount__btn"}
      >
        +
      </button>
      </div>
      <Button
        variant="contained"
        className="addCartButton"
        onClick={() => onAdd(totalItem)}
        disabled={stock === 0 ? true : null}
        sx={{ marginBottom: 1, backgroundColor: "#fcabae" }}
      >
        Agregar
      </Button>
    </div>
  );
};

export default ItemCount;
