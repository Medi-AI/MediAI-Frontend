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
		if (res.status === 200) {
			alert("Registration Successful");
			navigate(`/profile/${user.RegisterAs}/${user.name}`);
		}
		setErrorMsg(data.message);
	};
	return (
		<>
			<div className='main-container'>
				<div className='body-container'>
					<Navbar />
					<div className='register-container'>
						<h2>Signup to MediAI</h2>
						{errorMsg ? (
							<p className='relative top-[5px] text-[red] text-center'>
								{errorMsg}
							</p>
						) : null}
						<form>
							<div className='input-fields'>
								<div className='input-field'>
									<input
										name='name'
										type='text'
										placeholder='Name'
										onChange={
											handleChange
										}
									/>
								</div>
								<div className='input-field'>
									<input
										name='email'
										type='email'
										placeholder='Email'
										onChange={
											handleChange
										}
									/>
								</div>
								<div className='input-field icon-div'>
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
								</div>
								<div className='input-field icon-div'>
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
								</div>
								<div className='register-as-div'>
									<select
										name='RegisterAs'
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
