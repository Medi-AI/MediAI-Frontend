import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import LogoutPage from "./pages/Login/Logout";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";

import Predict from "./pages/Predict/Predict";
import Profile from "./pages/Profile/Profile";

import MedicalRecordsUpload from "./pages/Upload/Upload";
import Documents from "./pages/Documents/Documents";

import AboutUs from "./pages/AboutUs/AboutUs";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/predict" element={<Predict />} />

        <Route path="/upload" element={<MedicalRecordsUpload />} />
        <Route path="/documents" element={<Documents />} />

        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
