import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  const user = localStorage.getItem("mediai-user-data");
  return (
    <>
      <div className="main-home ">
        <Navbar currentPage="Home" />
        <div className="heading-div">
          <h1>Better Healthcare, Smarter Decisions</h1>
          <p>
            MediAI leverages AI technology for accurate diagnoses, doctor
            recommendations, and smarter medical records management.
          </p>
          <div className="btn-div">
            <Link to="/predict" className="predict-button">
              <button>Predict</button>
            </Link>
            {user ? (
              <Link to="/upload" className="sec-button">
                <button>Upload</button>
              </Link>
            ) : (
              <Link to="/login" className="sec-button">
                <button>Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
