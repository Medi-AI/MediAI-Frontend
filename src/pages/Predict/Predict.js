import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./Predict.css";

const Predict = () => {
  const [array, setArray] = useState("");
  const submit = async () => {
    console.log(array);
    const res = await fetch("/predict", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(),
    });
    console.log("data sent");
    const data = await res.json();

    if (data) {
      console.log(data);
    }
  };

  return (
    <>
      <Navbar currentPage="Predict" />
      <div className="profile-div">
        <div className="predict-div">
          <div className="input-selected">
            <input type="text" placeholder="Search Symptom" />
          </div>
          <div className="selected-symptoms"></div>
        </div>
      </div>
    </>
  );
};

export default Predict;
