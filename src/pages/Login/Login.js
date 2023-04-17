import React, {useState} from "react";
import "./Login.css";
import Logo from "../../images/logo/logo-no-background.png";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
	const [user, setUser] = useState({});
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
		const res = await fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(user),
		});
		const data = res.json();
		if (data) {
			navigate("/");
		}
	};
	return (
		<>
			<div className='main-container'>
				<Navbar />
				<div className='body-container'>
					<div className='login-container'>
						<h2>Login to MediAI</h2>
						<form className='form-container'>
							<input
								name='email'
								onChange={
									handleChange
								}
								type='email'
								placeholder='Username'
							/>
							<input
								name='password'
								onChange={
									handleChange
								}
								type='password'
								placeholder='Password'
							/>
							<p>Forget Password? </p>
							<div className='login-btn'>
								<input
									onClick={
										submit
									}
									type='submit'
									value='Login'
								/>
							</div>
						</form>
						<div className='tosignup'>
							<h4>
								Don't have an
								account?
								<Link
									to='/register'
									id='link'>
									Sign up
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

export default Login;
