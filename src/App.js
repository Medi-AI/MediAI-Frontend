import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";

import Predict from "./pages/Predict/Predict";
import Profile from "./pages/Profile/Profile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
    </>
  );
};

export default App;
