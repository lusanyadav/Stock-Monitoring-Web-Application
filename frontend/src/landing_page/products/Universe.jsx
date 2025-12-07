
import React from 'react'
function Universe({ imageURL }) {
  return (
    <div className="container">
      <div className="row p-5 text-center">
        <h1>The Zerodha Universe</h1>
        <p className="mt-3 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 mt-5 p-3">
          <img className="w-50" src="media/images/smallcaseLogo.png" />
          <p
            style={{ width: "55%", fontSize: "13px", marginLeft: "85px" }}
            className="text-muted mt-3 text-small"
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5 p-3">
          <img className="w-50" src="media/images/zerodhaFundhouse.png" />
          <p
            style={{ width: "55%", fontSize: "13px", marginLeft: "85px" }}
            className="text-muted mt-3 text-small"
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5 p-3">
          <img className="w-50" src="media/images/sensibullLogo.svg" />
          <p
            style={{ width: "55%", fontSize: "13px", marginLeft: "85px" }}
            className="text-muted mt-3 text-small"
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5 p-3">
          <img className="w-25" src="media/images/dittoLogo.png" />
          <p
            style={{ width: "55%", fontSize: "13px", marginLeft: "85px" }}
            className="text-muted mt-3 text-small"
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5 p-3">
          <img className="w-50" src="media/images/streakLogo.png" />
          <p
            style={{ width: "55%", fontSize: "13px", marginLeft: "85px" }}
            className="text-muted mt-3 text-small"
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5 p-3">
          <img className="w-50" src="media/images/tijori.svg" />
          <p
            style={{ width: "55%", fontSize: "13px", marginLeft: "85px" }}
            className="text-muted mt-3 text-small"
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <button
          className="mt-5  py-3 btn btn-primary fs-5 mb-5
          "
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;