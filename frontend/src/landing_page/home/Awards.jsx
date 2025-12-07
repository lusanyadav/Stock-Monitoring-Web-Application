import React from 'react'

function Awards() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 p-5">
            <img src="media/images/largestBroker.svg" />
          </div>
          <div className="col-6 p-5">
            <h1 className='fs-2'>Largest Stock Broker in India</h1>
            <p className="mb-5 mt-4">
              India's largest stockbroker with over 16 million clients, a market
              share of 15% of daily trading volume, and a valuation exceeding
              $7.7 billion as of December 2024
            </p>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li className="p-1">Futures & Options</li>
                  <li className="p-1">Commodity Derivatives</li>
                  <li className="p-1">Currency Derivatives</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li className="p-1">Stocks & IPOs</li>
                  <li className="p-1">Direct Mutual Funds</li>
                  <li className="p-1">Bonds & Government Securities</li>
                </ul>
              </div>
            </div>
            <img src="media/images/pressLogos.png" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    );
}

export default Awards;