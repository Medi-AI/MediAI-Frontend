import React, {useState} from "react";
import {useParams, useLocation} from "react-router-dom";
import "./Profile.css";

const Profile = () => {
	let {username} = useParams();

	const [profile, setProfile] = useState({
		username: "",
		age: "",
		gender: "",
		bloodgrp: "",
		address: "",
		medicalhistory: "",
		allergies: "",
		emergencyContact: "",
	});

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
		const res = await fetch("/profile/doctor", {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(profile),
		});

		console.log(res);
	};

	return (
		<div className='profile-main-container'>
			<div className='profile-container'>
				<div className='profile-heading'>
					<h2>Hey welcome, {username}</h2>
				</div>
				<div className='profile-inputs'>
					<input
						onChange={handleChange}
						name='username'
						type='text'
						placeholder='Username'
					/>
					<input
						onChange={handleChange}
						name='age'
						type='number'
						placeholder='AGE'
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
					<input
						onChange={handleChange}
						name='emergencyContact'
						className='full-input'
						type='text'
						placeholder='Emergency Contact'
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
