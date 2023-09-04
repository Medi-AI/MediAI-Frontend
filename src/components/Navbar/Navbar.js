import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logo/logo-no-background.png";
import "./Navbar.css";

function Navbar({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);

  useEffect(() => {
    let storedUserData = localStorage.getItem("mediai-user-data");
    if (!storedUserData) {
      setIsNewUser(true);
      return;
    }
    storedUserData = JSON.parse(storedUserData);
    setIsNewUser(false);
  }, []);

  function handleToggleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="navbar-container">
        <Link to="/" className="logo-container">
          <img
            title="MediAI"
            src={Logo}
            alt="Logo"
            className={isOpen ? "hide-logo" : "show-logo"}
          />
        </Link>
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
              <Link to="/" className={currentPage === "Home" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className={currentPage === "Aboutus" ? "active" : ""}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/predict"
                className={currentPage === "Predict" ? "active" : ""}
              >
                Predict
              </Link>
            </li>
            <li>
              <Link
                to="/upload"
                className={currentPage === "Upload" ? "active" : ""}
              >
                Upload
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={currentPage === "Profile" ? "active" : ""}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/documents"
                className={currentPage === "Documents" ? "active" : ""}
              >
                Documents
              </Link>
            </li>
            {isNewUser ? (
              <li>
                <Link
                  to="/login"
                  className={currentPage === "Login" ? "active" : ""}
                >
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/logout"
                  className={currentPage === "Logout" ? "active" : ""}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
