import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./Profile.css";
import Navbar from "../../components/Navbar";

const Profile = () => {
  const navigate = useNavigate();

  const authToken = localStorage.getItem("mediai-auth-token");
  const mediai_name = localStorage.getItem("mediai-name");

  if (!authToken) {
    navigate("/login");
  }

  const [profile, setProfile] = useState({
    name: mediai_name,
    dob: "",
    gender: "",
    bloodgrp: "",
    phoneno: "",
    emergencyContact: "",
    address: "",
    medicalhistory: "",
    allergies: "",
  });

  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(() => {
      return {
        ...profile,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    console.log(profile);

    const res = await fetch("http://localhost:8080/profile", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "mediai-auth-token": authToken,
      },
      body: JSON.stringify(profile),
    });

    const data = await res.json();

    if (res.status === 200) {
      alert("Profile added!");
      navigate("/");
    }
    setErrorMsg(data.message);
  };

  return (
    <div className="profile-main-container">
      <Navbar currentPage="Profile" />
      <div className="profile-container">
        <div className="profile-heading">
          <h2>Your Profile</h2>
          <p>{errorMsg}</p>
        </div>
        <div className="profile-inputs">
          <input
            value={mediai_name}
            name="name"
            type="text"
            placeholder="Name"
          />
          <input
            onChange={handleChange}
            name="dob"
            type="date"
            placeholder="DOB"
          />
          <select name="gender" onChange={handleChange}>
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <select name="bloodgrp" onChange={handleChange}>
            <option>Blood Group</option>
            <option>A+</option>
            <option>B+</option>
            <option>AB+</option>
            <option>O+</option>
            <option>A-</option>
            <option>B-</option>
            <option>AB-</option>
            <option>O-</option>
          </select>
          <input
            onChange={handleChange}
            name="phoneno"
            type="number"
            placeholder="Phone No."
          />
          <input
            onChange={handleChange}
            name="emergencyContact"
            type="number"
            placeholder="Emergency Contact No."
          />
          <input
            onChange={handleChange}
            name="address"
            className="full-input"
            type="text"
            placeholder="Address"
          />
          <input
            onChange={handleChange}
            name="medicalhistory"
            className="full-input"
            type="text"
            placeholder="Medical History"
          />
          <input
            onChange={handleChange}
            name="allergies"
            className="full-input"
            type="text"
            placeholder="Allergies if any"
          />
        </div>
        <div className="profile-submit">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
