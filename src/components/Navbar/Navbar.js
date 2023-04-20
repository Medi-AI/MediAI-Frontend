import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../images/logo/logo-no-background.png";

function Navbar({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="navbar-container">
        <a className="logo-container" href="/">
          <img
            src={Logo}
            alt="Logo"
            className={isOpen ? "hide-logo" : "show-logo"}
          />
        </a>
        <div
          className={isOpen ? "button_container active" : "button_container"}
          id="toggle"
          onClick={handleToggleClick}
        >
          <span className="top"></span>
          <span className="middle"></span>
          <span className={isOpen ? "bottom" : "bottom closed"}></span>
        </div>
      </div>
      <div className={isOpen ? "overlay open" : "overlay"} id="overlay">
        <nav className="overlay-menu">
          <ul>
            <li>
              <a href="/" className={currentPage === "Home" ? "active" : ""}>
                Home
              </a>
            </li>
            <li>
              <a
                href="/login"
                className={currentPage === "Login" ? "active" : ""}
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/predict"
                className={currentPage === "Predict" ? "active" : ""}
              >
                Predict
              </a>
            </li>
            <li>
              <a
                href="/upload"
                className={currentPage === "Upload" ? "active" : ""}
              >
                Upload
              </a>
            </li>
            <li>
              <a
                href="/profile"
                className={currentPage === "Profile" ? "active" : ""}
              >
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
