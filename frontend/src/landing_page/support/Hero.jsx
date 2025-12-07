import React from 'react'

function Hero() {
    return (
      <>
        <section className="container-fluid" id="supportHero">
          <div className="p-5" id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="">Track Tickets</a>
          </div>
          <div style={{ marginLeft: "130px" }} className="row p-3">
            <div className="col p-5">
              <h1 className="fs-4 mb-3">
                Search for an answer or browse help topics to create a topic
              </h1>
              <input className="mb-3" placeholder="Ex. How do I activate F&Q" />
              <br />
              <a style={{ marginRight: "10px" }} href="">
                Track account opening
              </a>
              <a style={{ marginRight: "10px" }} href="">
                Track segment activation
              </a>
              <a style={{ marginRight: "10px" }} href="">
                Intraday margins
              </a>
              <a style={{ marginRight: "10px" }} href="">
                Kite user manual
              </a>
            </div>
            <div className="col p-5" style={{ marginLeft: "40px" }}>
              <h1 className="fs-4">Featured</h1>
              <ol style={{ lineHeight: "40px" }}>
                <li>
                  <a href="">Current Takeovers and Delisting - January 2024</a>
                </li>
                <li>
                  <a href="">Latest Intraday leverages - MIS & CO</a>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero;