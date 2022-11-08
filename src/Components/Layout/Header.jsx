import React from "react";
import { Link } from "react-router-dom";
import {AiFillFolder} from "react-icons/ai"

const Header = () => {
  return (
    <nav className="navbar header   navbar-expand-lg bg-white">
      <div className="container">
        <Link className=" nav-link active" aria-current="page" to="home">
          <img
            src="./Assists/logo-cr.png"
            alt=""
            style={{ width: "16%" }}
            className="logo p-1 rounded"
          />
          <span className="logo">MarathonCash.Com</span>
        </Link>

        <button
          className=" color navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item rounded-3">
              <Link
                className="nav-link fw-bolder clr"
                aria-current="page"
                to="Home">
                <AiFillFolder size={35} />
                Connect Wallet
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
