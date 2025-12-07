import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


function Orders() {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  
    
  }, [])
  

  return (
    <>
      {allOrders.length == 0 && <NoOrders />}
      {allOrders.length > 0 && <AllOrders allOrders={allOrders} />}
    </>
  );
};


export const AllOrders = ({ allOrders }) => {
  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>
            {allOrders.map((stock, index) => {
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  {/* toFixed(2)  make it to two decimal palces */}
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{stock.mode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const NoOrders = () => {

  return (
    <>
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      </div>
    </>
  );
}

export default Orders;
