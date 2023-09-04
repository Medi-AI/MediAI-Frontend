import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import "./Logout.css";

const LogoutPage = () => {
  const navigate = useNavigate();
  const [confirmLogout, setConfirmLogout] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("mediai-auth-token");
    localStorage.removeItem("mediai-user-data");
    localStorage.removeItem("mediai-profile-data");
    navigate("/");
  };

  return (
    <div className="logout-page">
      <Navbar currentPage="Logout" />
      {confirmLogout ? (
        <div>
          <h1>Are you sure you want to log out?</h1>
          <button onClick={handleLogout}>Yes</button>
          <button onClick={() => navigate("/")}>No</button>
        </div>
      ) : (
        <button onClick={() => setConfirmLogout(true)}>Log out</button>
      )}
    </div>
  );
};

export default LogoutPage;
