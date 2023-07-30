import React, { useEffect } from "react";

import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  let user = localStorage.getItem("mediai-user-data");

  useEffect(() => {
    document.title = "MediAI | Home";
  }, []);

  return (
    <>
      <div className="home__main-div">
        <Navbar currentPage="Home" />
        <div className="home__heading-div">
          <h1 className="home__heading-div__heading">
            Better Healthcare, Smarter Decisions
          </h1>
          <p className="home__heading-div__sub-heading">
            MediAI leverages AI technology for accurate diagnoses, doctor
            recommendations, and smarter medical records management.
          </p>
          <div className="home__btn-div">
            <a href="predict" className="home__btn-div__primary-btn">
              <button className="home__btn-div__btn">Predict</button>
            </a>
            {user ? (
              <a href="upload" className="home__btn-div__secondary-btn">
                <button className="home__btn-div__btn">Upload</button>
              </a>
            ) : (
              <a href="login" className="home__btn-div__secondary-btn">
                <button className="home__btn-div__btn">Login</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
