import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let [active1, setActive1] = useState("");
  let [active2, setActive2] = useState("");
  let [active3, setActive3] = useState("");
  function aboutActive() {
    setActive1("active");
    setActive2("");
    setActive3("");
  }
  function portfolioActive() {
    setActive2("active");
    setActive1("");
    setActive3("");
  }
  function contactActive() {
    setActive3("active");
    setActive2("");
    setActive1("");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light  Navbar-bg py-3 position-fixed w-100 z-3">
      <div className="container">
        <Link
          className="navbar-brand fs-2 fw-bold text-light"
          onClick={() => {
            setActive3("");
            setActive2("");
            setActive1("");
          }}
          to="/"
        >
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={"fw-bold text-light nav-link " + active1}
                onClick={aboutActive}
                aria-current="page"
                to="about"
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"fw-bold text-light nav-link " + active2}
                onClick={portfolioActive}
                to="portfolio"
              >
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"fw-bold text-light nav-link " + active3}
                onClick={contactActive}
                to="contact"
                tabindex="-1"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
