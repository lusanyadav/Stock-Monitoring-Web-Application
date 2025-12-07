import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn,faCreditCard, faCoins, faCirclePlus, faUser, faTerminal } from "@fortawesome/free-solid-svg-icons";
function CreateTicket() {
    return (
      <div className="container">
        <div className="row p-5 mt-5 mb-5">
          <h1 style={{marginLeft:"35px"}} className="fs-3 text-muted">
            To create a ticket, select a relevant topic.
          </h1>
          <div className="col-4 p-5 mt-5 mb-2">
            <div className="d-flex align-items-center mb-4">
              <FontAwesomeIcon
                style={{ fontSize: "15px" }}
                icon={faCirclePlus}
              />
              <h4 className="p-2 fs-4">Account Opening</h4>
            </div>
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Online Account Opening
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Offline Account Opening
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Company, Partnership and HUF Account
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Opening
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              NRI Account Opening
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Charges at Zeerodha
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Zeerodha IDFC First Bank 3-in-1 Account
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Getting Started
            </a>
          </div>
          <div className="col-4 p-5 mt-5 mb-2">
            <div className="d-flex align-items-center mb-4">
              <FontAwesomeIcon style={{ fontSize: "15px" }} icon={faUser} />
              <h4 className="p-2 fs-4">Your Zeerodha Account</h4>
            </div>
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Login Credentials
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Account modification and segment Addition
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              DP ID and Bank Details
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Your Profile
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Transfer and conversion of shares
            </a>
          </div>
          <div className="col-4 p-5 mt-5 mb-2">
            <div className="d-flex align-items-center mb-4">
              <FontAwesomeIcon
                style={{ fontSize: "15px" }}
                icon={faChartColumn}
              />
              <h4 className="p-2 fs-4">Support</h4>
            </div>
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Margin/Leverage, Product & Order types
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Kite Web and Mobile
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Trading FAQs
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Corporate Actions
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Sentinel
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Kite API
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Pi and Other Platform
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Stockreports+
            </a>
          </div>

          <div className="col-4 p-5 mb-5">
            <div className="d-flex align-items-center mb-4">
              <FontAwesomeIcon
                style={{ fontSize: "15px" }}
                icon={faCreditCard}
              />
              <h4 className="p-2 fs-4">Funds</h4>
            </div>
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Adding funds
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Fund Withdrawal
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              eMandates
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Adding Bank Accounts
            </a>
          </div>
          <div className="col-4 p-5 mb-5">
            <div className="d-flex align-items-center mb-4">
              <FontAwesomeIcon style={{ fontSize: "15px" }} icon={faTerminal} />
              <h4 className="p-2 fs-4">Console</h4>
            </div>
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Reports
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Ledger
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Portfolio
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              60 Day Challenge
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              IPO
                    </a>
                    <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Referral Programm
            </a>
          </div>
          <div className="col-4 p-5 mb-5">
            <div className="d-flex align-items-center mb-4">
              <FontAwesomeIcon style={{ fontSize: "15px" }} icon={faCoins} />
              <h4 className="p-2 fs-4">Coins</h4>
            </div>
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Understanding Mutual Funds
            </a>
            <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
                        About Coins
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Buying and Selling through Coin
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Starting an SIP
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Managing you Portfolio
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Coin App
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Moving to Coin
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              Government Securities
            </a>
          </div>
        </div>
      </div>
    );
}

export default CreateTicket;