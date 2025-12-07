import React from 'react'
import { useContext, useState, useEffect } from "react";
import GeneralContext from "./GeneralContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons"; 
import axios from "axios"

function BuyAction({ stock }) {
  const { isOpen,currStock, isDown, stockName, handleCloseBuyWindow } = useContext(GeneralContext);
  
  const [priceValue, setPriceValue] = useState(currStock?.price || 0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setPriceValue(currStock.price);
      setQuantity(1);
    }
  }, [isOpen, currStock]);
  
  if (isOpen == false) {
    return null;
  }

  
  const handleStockPrice = (e) => {
    let qty = e.target.value;
    setQuantity(qty);
    setPriceValue((qty * currStock.price).toFixed(2));
  }
  const handleConfirm = () => {

    axios.post("http://localhost:8080/newOrder", {
      name: currStock.name,
      qty: quantity,
      price: priceValue,
      mode: "Buy"
    });

    handleCloseBuyWindow();


  }

  const handleCloseWindow = () => {
    handleCloseBuyWindow();
  }
  return (
    <>
      <div className="buy-actions border w-50">
        <div className="stock-name">
          <div className="currStock">
            <h3 className={isDown ? "down" : "up"}>{stockName}</h3>
            <div className="mx-5 fs-5">
              <p>Price: ₹{currStock.price}</p>
              <p>Avg: {currStock.percent}</p>
            </div>
          </div>
          <FontAwesomeIcon
            className="cross-btn"
            icon={faXmark}
            onClick={handleCloseWindow}
          />
        </div>

        <fieldset className="stock-info mt-5">
          <div>
            <label className="order-label" htmlFor="quantity">
              Quantity
            </label>
            <br />
            <input
              className="order-input mt-3"
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => {
                handleStockPrice(e);
              }}
            />
          </div>
          <div>
            <label className="order-label" htmlFor="price">
              Price
            </label>
            <br />
            <input
              className="order-input mt-3"
              id="price"
              type="number"
              step="0.01"
              value={priceValue}
              readOnly
            />
          </div>
        </fieldset>

        <br />
        <br />
        <div className="order-final">
          <button className="buttons cancel mx-5" onClick={handleCloseWindow}>
            Cancel
          </button>
          <button className="buttons confirm" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default BuyAction;