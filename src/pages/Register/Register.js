import React, {useState} from "react";

import "./Register.css";
import {Link, useNavigate} from "react-router-dom";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Navbar from "../../components/Navbar/Navbar";

const Register = () => {
	const [user, setUser] = useState({});
	const [showPasswordOne, setShowPasswordOne] = useState(false);
	const [showPasswordTwo, setShowPasswordTwo] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null);

	const navigate = useNavigate();

	const handleChange = (e) => {
		const {name, value} = e.target;
		setUser(() => {
			return {
				...user,
				[name]: value,
			};
		});
	};

	const submit = async (e) => {
		e.preventDefault();
		const res = await fetch("/register", {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(user),
		});
		console.log("data sent");
		const data = await res.json();
		console.log(data);
	};
	return (
		<>
			<div className='main-container'>
				<div className='body-container'>
					<Navbar />
					<div className='register-container'>
						<h2>Signup to MediAI</h2>
						<form>
							<div className='input-fields'>
								<input
									name='name'
									type='text'
									placeholder='Name'
									onChange={
										handleChange
									}
								/>
								<input
									name='email'
									type='email'
									placeholder='Email'
									onChange={
										handleChange
									}
								/>
								<input
									name='password'
									type={
										showPasswordOne
											? "text"
											: "password"
									}
									placeholder='Password'
									onChange={
										handleChange
									}
								/>
								{!showPasswordOne ? (
									<VisibilityIcon
										className='icons'
										id='icon1'
										onClick={() =>
											setShowPasswordOne(
												!showPasswordOne,
											)
										}
									/>
								) : (
									<VisibilityOffIcon
										className='icons'
										id='icon1'
										onClick={() =>
											setShowPasswordOne(
												!showPasswordOne,
											)
										}
									/>
								)}

								<input
									name='repeat_password'
									type={
										showPasswordTwo
											? "text"
											: "password"
									}
									placeholder='Repeat Password'
									onChange={
										handleChange
									}
								/>
								{!showPasswordTwo ? (
									<VisibilityIcon
										className='icons'
										id='icon2'
										onClick={() =>
											setShowPasswordTwo(
												!showPasswordTwo,
											)
										}
									/>
								) : (
									<VisibilityOffIcon
										className='icons'
										id='icon2'
										onClick={() =>
											setShowPasswordTwo(
												!showPasswordTwo,
											)
										}
									/>
								)}
								<div className='register-as-div'>
									<select
										name='pose'
										onChange={
											handleChange
										}>
										<option
											className='select-items'
											value='Register As'>
											Register
											As:
										</option>
										<option
											className='select-items'
											value='Doctor'>
											Doctor
										</option>
										<option
											className='select-items'
											value='Patient'>
											Patient
										</option>
									</select>
								</div>
							</div>
							<div className='submit-btn'>
								<input
									onClick={
										submit
									}
									type='button'
									value='Register'
								/>
							</div>
						</form>
						<div className='tosignin'>
							<h4>
								Already have an
								account?
								<Link
									to='/login'
									id='link'>
									Login
								</Link>
							</h4>
						</div>
						<div className='error-div'>
							{errorMsg && (
								<p className='error-msg'>
									{
										errorMsg
									}
								</p>
							)}
						</div>
					</div>
					<div className='heading-container'>
						<h1>
							REVOLUTIONALISING <br />
							HEALTHCARE
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
