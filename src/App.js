import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Doctor from "./pages/Profile/Doctor";
import Patient from "./pages/Profile/Patient";
import Predict from "./pages/Predict/Predict";

const App = () => {
	return (
		<>
			<Routes>
				<Route
					path='https://mediai-frontend.onrender.com/'
					element={<Home />}
				/>
				<Route
					path='https://mediai-frontend.onrender.com/login'
					element={<Login />}
				/>
				<Route
					path='https://mediai-frontend.onrender.com/register'
					element={<Register />}
				/>
				<Route
					path='https://mediai-frontend.onrender.com/profile/patient/:username'
					element={<Patient />}
				/>
				<Route
					path='https://mediai-frontend.onrender.com/profile/doctor/:username'
					element={<Doctor />}
				/>
				<Route
					path='https://mediai-frontend.onrender.com/predict'
					element={<Predict />}
				/>
			</Routes>
		</>
	);
};

export default App;
