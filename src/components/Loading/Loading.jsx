import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <>
      <div className="loading-wrapper">
        <h2 className="loading-heading">Diagnosing...</h2>
        <div className="loading-container"></div>
      </div>
    </>
  );
};

export default Loading;
