import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Predict.css";
import Symptoms from "./Symptoms";
import PredictBG from "../../images/predictbg.png";

import Barchart from "../../components/BarChart.js/Barchart";
import Piechart from "../../components/PieChart.js/Piechart";
import DiseaseEle from "./DiseaseEle";

const Predict = () => {
  const [query, setQuery] = useState("");
  const [initialSymptoms, setInitialSymptoms] = useState(Symptoms);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [output, setOutput] = useState();
  const [isHome, setIsHome] = useState(true);

  const tempOutput = {
    filtered_output: [
      ["Common Cold", 0.33181244939511906],
      ["Chronic cholestasis", 0.07406983383732302],
    ],
    message: "2 matches found",
    output: [
      ["(vertigo) Paroymsal  Positional Vertigo", 0.019047251972884975],

      ["AIDS", 0.020293630102007805],
      ["Acne", 0.02029363008909162],
      ["Alcoholic hepatitis", 0.010321220135888036],
      ["Allergy", 0.020020074912791137],
      ["Arthritis", 0.01676428210168159],
    ],
  };

  const navigate = useNavigate;
  const removeSymptom = (symptom) => {
    setInitialSymptoms((prevstate) => {
      return prevstate.filter((dataSymptom) => {
        return symptom !== dataSymptom;
      });
    });
  };

  const removeSelectedSymptom = (symptom) => {
    setSelectedSymptoms((prevstate) => {
      return prevstate.filter((dataSymptom) => {
        return symptom !== dataSymptom;
      });
    });
    initialSymptoms.push(symptom);
  };

  const handleOnClick = (symptom) => {
    setQuery("");
    removeSymptom(symptom);

    selectedSymptoms.push(symptom);
  };

  const submitPredict = async () => {
    let symptomsArray = [];
    selectedSymptoms.map((ele) => {
      return symptomsArray.push(ele.name);
    });
    console.log(symptomsArray);

    const res = await fetch("https://mediai.pythonanywhere.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        symptoms: symptomsArray,
      }),
    });
    console.log("data sent");
    const data = await res.json();
    console.log(data);
    setOutput(data);
    setIsHome(false);
    window.scroll(0, 1200);

    console.log(data["filtered_output"]);
  };

  return (
    <>
      <Navbar currentPage="Predict" />
      <div className="profile-div">
        <div className="bg-container"></div>
        {isHome ? <img className="bg-div" src={PredictBG}></img> : null}
        <div className="predict-div">
          <div className="input-selected">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search Symptoms"
            />
            <div className="symptoms-container">
              {initialSymptoms
                .filter((symptom) =>
                  symptom.name.toLowerCase().includes(query.toLowerCase())
                )
                .slice(0, 9)
                .map((symptom) => {
                  return (
                    <li
                      onClick={() => handleOnClick(symptom)}
                      className="symptom"
                    >
                      <p>{symptom.name}</p>
                    </li>
                  );
                })}
            </div>
          </div>
          <h2>Selected Symptoms</h2>
          <div className="selected-symptoms">
            {selectedSymptoms.map((symptom) => {
              return (
                <div className="selected-symptom-div">
                  <li className="symptom selected-symptom" key={symptom.name}>
                    {symptom.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={() => {
                        removeSelectedSymptom(symptom);
                      }}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </li>
                </div>
              );
            })}
          </div>
          <div className="submit-div">
            <button onClick={submitPredict}>Predict</button>
          </div>
        </div>
      </div>
      <div className="second-container" id="output">
        <h2>OUR PROGNOSIS</h2>
        <div className="output-div">
          <div className="info">
            {output ? <DiseaseEle output={output} /> : null}
          </div>
          <div className="graphs-div">
            <div className="graph">
              {output ? <Piechart output={output ? output : tempOutput} /> : ""}
            </div>
            <div className="graph">
              {output ? <Barchart output={output ? output : tempOutput} /> : ""}
            </div>
          </div>
        </div>
        <div className="btn-div">
          <h2>Do you want a doctor recommendation?</h2>
          <div className="btns">
            <button id="btn-one">YES</button>
            <button id="btn-two">NO</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Predict;
