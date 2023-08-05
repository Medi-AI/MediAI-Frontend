import React, { useState } from "react";
import "./Navbar2.css";

function NavBar({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container">
      <nav className={isOpen ? "navbar change" : "navbar"}>
        <div className="hamburger-menu" onClick={handleToggleClick}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a
              href="#"
              className={
                currentPage === "Home" ? "nav-links active" : "nav-links"
              }
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={
                currentPage === "Predict" ? "nav-links active" : "nav-links"
              }
            >
              Predict
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={
                currentPage === "Upload" ? "nav-links active" : "nav-links"
              }
            >
              Upload
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={
                currentPage === "Profile" ? "nav-links active" : "nav-links"
              }
            >
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
