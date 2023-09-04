import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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
      <div>
        <Toaster position="top-center"></Toaster>
      </div>
      <HashRouter hashType="slash">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<LogoutPage />} />
          <Route exact path="/register" element={<Register />} />

          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/predict" element={<Predict />} />

          <Route exact path="/upload" element={<MedicalRecordsUpload />} />
          <Route exact path="/documents" element={<Documents />} />

          <Route exact path="/aboutus" element={<AboutUs />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
