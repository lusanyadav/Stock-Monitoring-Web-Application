import React from "react";
import { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faEllipsis } from "@fortawesome/free-solid-svg-icons"; 
import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnoutChart";
const labels = watchlist.map((subArray) => subArray["name"]);
function WatchList() {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // export const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  // datasets: [
  //   {
  //     label: "# of Votes",
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       "rgba(255, 99, 132, 0.2)",
  //       "rgba(54, 162, 235, 0.2)",
  //       "rgba(255, 206, 86, 0.2)",
  //       "rgba(75, 192, 192, 0.2)",
  //       "rgba(153, 102, 255, 0.2)",
  //       "rgba(255, 159, 64, 0.2)",
  //     ],
  //     borderColor: [
  //       "rgba(255, 99, 132, 1)",
  //       "rgba(54, 162, 235, 1)",
  //       "rgba(255, 206, 86, 1)",
  //       "rgba(75, 192, 192, 1)",
  //       "rgba(153, 102, 255, 1)",
  //       "rgba(255, 159, 64, 1)",
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
  // };
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};


function WatchListItem({ stock }) {
  
  const [showWatchListActions, setshowWatchListActions] = useState(false);

  const handleMouseEnter = (e)=>{
    setshowWatchListActions(true)
  }
  const handleMouseLeave = (e) => {
    setshowWatchListActions(false);
  };
  return (
    <div>
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="item">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          <div className="itemInfo">
            <span className="percent">{stock.percent}</span>
            {stock.isDown ? (
              <KeyboardArrowDown className="down" />
            ) : (
              <KeyboardArrowUp className="up" />
            )}
            <span className="price">{stock.price}</span>
          </div>
        </div>
        {showWatchListActions && <WatchListActions stock={stock} />}
      </li>
    </div>
  );
}

function WatchListActions({ stock }) {
  const { stockName, setStockName, handleCloseBuyWindow, handleOpenBuyWindow } =
    useContext(GeneralContext);
  
  
  const handleOpenBuyWindowClick = ()=>{
    handleOpenBuyWindow(stock);
  }
  return (
    <>
      <span className="actions">
        <span>
          <Tooltip
            title="Buy (B)"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="buy" onClick={handleOpenBuyWindowClick}>
              Buy
            </button>
          </Tooltip>

          <Tooltip
            title="Sell (S)"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="sell">
              Sell
            </button>
          </Tooltip>

          <Tooltip
            title="Analytics (A)"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button
              className="action"
              style={{ backgroundColor: "paleturquoise" }}
            >
              <FontAwesomeIcon className="icon" icon={faChartSimple} />
            </button>
          </Tooltip>

          <Tooltip
            title="More"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button
              className="action"
              style={{ backgroundColor: "papayawhip" }}
            >
              <FontAwesomeIcon className="" icon={faEllipsis} />
            </button>
          </Tooltip>
        </span>
      </span>
    </>
  );
};

export default WatchList;

