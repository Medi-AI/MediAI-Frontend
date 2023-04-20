import React from "react";

import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="main-home">
        <Navbar currentPage="Home" />
        <div className="heading-div">
          <h1>Better Healthcare, Smarter Decisions</h1>
          <p>
            MediAI leverages AI technology for accurate diagnoses, doctor
            recommendations, and smarter medical records management.
          </p>
          <div className="btn-div">
            <button className="predict-button">
              <a href="predict">Predict</a>
            </button>
            <button className="login-button">
              <a href="login">Login</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
