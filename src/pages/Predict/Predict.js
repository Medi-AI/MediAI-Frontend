import React, { useState } from "react";
import { isMobile } from "react-device-detect";

import Navbar from "../../components/Navbar";
import "./Predict.css";
import Symptoms from "./Symptoms";
import PredictBG from "../../images/predictbg.png";

import Piechart from "../../components/PieChart.js/Piechart";
import DiseaseEle from "./DiseaseEle";
import Loading from "../../components/Loading/Loading";

const Predict = () => {
  const [query, setQuery] = useState("");
  const [initialSymptoms, setInitialSymptoms] = useState(Symptoms);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [output, setOutput] = useState();

  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const res = await fetch("https://mediai.pythonanywhere.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        symptoms: symptomsArray,
      }),
    });

    const data = await res.json();

    setOutput(data);
    window.scrollTo(0, !isMobile ? 1200 : 700);
    setIsLoading(false);
  };

  return (
    <>
      <Navbar currentPage="Predict" />
      {isLoading && <Loading />}
      <div className="profile-div ">
        <div className="bg-container"></div>

        <img className="bg-div" src={PredictBG}></img>

        <div className="predict-div ">
          <div className="input-selected ">
            <input
              key={query}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search Symptoms"
            />
            <div className="symptoms-container ">
              {initialSymptoms
                .filter((symptom) =>
                  symptom.name.toLowerCase().includes(query.toLowerCase())
                )
                .slice(0, 9)
                .map((symptom) => {
                  return (
                    <li
                      key={symptom.name}
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
          <div className="selected-symptoms ">
            {selectedSymptoms.map((symptom) => {
              return (
                <div className="selected-symptom-div" key={symptom.name}>
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
        <div className="output-div ">
          <div className="info">
            {output ? <DiseaseEle output={output} /> : null}
          </div>
          <div className="graphs-div">
            <div className="graph">
              {output ? <Piechart output={output} /> : null}
              <p>Pie Chart</p>
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
