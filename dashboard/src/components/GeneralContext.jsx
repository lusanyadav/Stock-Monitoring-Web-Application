import React, { createContext, useState } from 'react'

const GeneralContext = createContext({
    isOpen: false,
    isDown: false,
    handleOpenBuyWindow: () => {},
    handleCloseBuyWindow: () => {},
  stockName: "Stock Name",
      
  }
);

export const GeneralContextProvider = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [stockName, setStockName] = useState("Stock Name");
    const [isDown, setIsDown] = useState(false);
  const [currStock, setCurrStock] = useState({});

    const handleOpenBuyWindow = (stock) => {
        setIsOpen(true);
        setStockName(stock.name);
        setIsDown(stock.isDown);
        setCurrStock(stock);
    }

    const handleCloseBuyWindow = () => {
        setStockName("Stock Name")
        setIsOpen(false);
    }
    return (
      <GeneralContext.Provider
        value={{
          isOpen,
          isDown,
          currStock,
          stockName,
          handleOpenBuyWindow,
          handleCloseBuyWindow,
        }}
      >
        {props.children}
      </GeneralContext.Provider>
    );
}

export default GeneralContext;

