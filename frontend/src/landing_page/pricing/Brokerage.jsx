
import React from 'react'

function Brokerage() {
    return (
      <div className="container">
        <div className="row border-top p-5 mt-5 text-center">
          <div className="col-4 p-4">
            <a href="" style={{ textDecoration: "none" }}>
              <h3 className="fs-5">Brokerage</h3>
            </a>
            <ul
              className="text-muted mt-5"
              style={{ textAlign: "left", lineHeight: "4", fontSize: "13px" }}
            >
              <li>SEBI Charges</li>
              <li>Pledging charges</li>
              <li>AMC (Account maintenance charges)</li>
              <li>Payment gateway charges</li>
              <li>Off-market transfer charges</li>
              <li>Margin Trading Facility (MTF)</li>
              <li>GST</li>
              <li>Physical CMR request</li>
            </ul>
          </div>
          <div className="col-8 p-4">
            <a href="" style={{ textDecoration: "none" }}>
              <h3 className="fs-5">List of Charges</h3>
            </a>
            <ul
              className="text-muted mt-5"
              style={{
                textAlign: "left",
                lineHeight: "4",
                marginLeft: "180px",
                fontSize: "13px",
              }}
            >
              <li>
                Charged at ₹10 per crore + GST by Securities and Exchange Board
                of India.
              </li>
              <li>₹30 + GST per pledge request per ISIN.</li>
              <li>
                For non-BSDA demat accounts: ₹300/year + 18% GST charged
                quarterly (90 days).
              </li>
              <li>₹9 + GST (Not levied on transfers done via UPI)</li>
              <li>₹25 per transaction.</li>
              <li>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li>18% of ( brokerage + SEBI charges + transaction charges)</li>
              <li>
                First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
                for subsequent requests.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Brokerage;