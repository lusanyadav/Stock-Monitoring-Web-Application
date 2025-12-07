import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="sticky-top">
      <nav
        class="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#FFF" }}
      >
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img src="media/images/logo.svg" style={{ width: "25%" }} />
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" to="/signup">
                    Signup
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link active" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link active" to="/product">
                    Products
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link active" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="support">
                    Support
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className="nav-link" icon={faBars} />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
