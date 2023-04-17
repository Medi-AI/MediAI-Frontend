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
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route
					path='/register'
					element={<Register />}
				/>
				<Route
					path='/patient/:username'
					element={<Patient />}
				/>
				<Route
					path='/doctor/:username'
					element={<Doctor />}
				/>
				<Route path='/predict' element={<Predict />} />
			</Routes>
		</>
	);
};

export default App;
