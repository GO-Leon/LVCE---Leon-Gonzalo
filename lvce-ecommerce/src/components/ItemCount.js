import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

const ItemCount = ({ onAdd }, stockDetail) => {
  const initial = 1;

  const [totalItem, setTotalItem] = useState(initial);

  const addItem = (num) => {
    setTotalItem(totalItem + num);
  };

  return (
    <div className="countContainer">
      <div className="countContainer__div">
        {totalItem === initial ? (        
        <button
          onClick={() => addItem(-1)}
          disabled={totalItem === initial ? true : null}
          className="itemCount__btn--false"
        >
          -
        </button>):(
                  <button
                  onClick={() => addItem(-1)}
                  disabled={totalItem === initial ? true : null}
                  className="itemCount__btn"
                >
                  -
                </button>
        )}
        <h3>{totalItem}</h3>
        {totalItem === stockDetail ? (        
        <button
        onClick={() => addItem(+1)}
        disabled={totalItem === stockDetail ? true : null}
        className="itemCount__btn--false"
      >
        +
      </button>):(
                  <button
                  onClick={() => addItem(+1)}
                  disabled={totalItem === stockDetail ? true : null}
                  className="itemCount__btn"
                >
                  +
                </button>
        )}
      </div>
      <Button
        variant="contained"
        className="addCartButton"
        onClick={() => onAdd(totalItem)}
        disabled={stockDetail === 0 ? true : null}
        sx={{ marginBottom: 1, backgroundColor: "#fcabae" }}
      >
        Agregar
      </Button>
    </div>
  );
};

export default ItemCount;
