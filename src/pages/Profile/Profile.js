import React, {useState} from "react";

import {useParams, useLocation, useNavigate} from "react-router-dom";
import "./Profile.css";

const Profile = () => {
	let {username} = useParams();
	const navigate = useNavigate();

	const [profile, setProfile] = useState({
		username: username,
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
		const {name, value} = e.target;
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
			},
			body: JSON.stringify(profile),
		});

		const data = await res.json();

		if (res.status === 200) {
			alert("Profile added!");
		}
		setErrorMsg(data.message);
	};

	return (
		<div className='profile-main-container'>
			<div className='profile-container'>
				<div className='profile-heading'>
					<h2>Your Profile</h2>
					<p>{errorMsg}</p>
				</div>
				<div className='profile-inputs'>
					<input
						value={username}
						name='username'
						type='text'
						placeholder='Username'
					/>
					<input
						onChange={handleChange}
						name='dob'
						type='date'
						placeholder='DOB'
					/>
					<select
						name='gender'
						onChange={handleChange}>
						<option>Gender</option>
						<option>Male</option>
						<option>Female</option>
						<option>Gay</option>
						<option>Lesbian</option>
						<option>Other</option>
					</select>
					<select
						name='bloodgrp'
						onChange={handleChange}>
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
						name='phoneno'
						type='number'
						placeholder='Phone No.'
					/>
					<input
						onChange={handleChange}
						name='emergencyContact'
						type='number'
						placeholder='Emergency Contact No.'
					/>
					<input
						onChange={handleChange}
						name='address'
						className='full-input'
						type='text'
						placeholder='Address'
					/>
					<input
						onChange={handleChange}
						name='medicalhistory'
						className='full-input'
						type='text'
						placeholder='Medical History'
					/>
					<input
						onChange={handleChange}
						name='allergies'
						className='full-input'
						type='text'
						placeholder='Allergies if any'
					/>
				</div>
				<div className='profile-submit'>
					<button onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;
