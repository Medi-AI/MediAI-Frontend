import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import "./Profile.css";
import Navbar from "../../components/Navbar";

const Profile = () => {
	const navigate = useNavigate();
	const [isNewUser, setIsNewUser] = useState(true);
	const [errorMsg, setErrorMsg] = useState(null);
	const [userData, setUserData] = useState(null);
	const [userProfile, setUserProfile] = useState(null);
	const [profile, setProfile] = useState({
		user_id: "",
		name: "",
		dob: "",
		gender: "",
		bloodgrp: "",
		phoneno: "",
		emergencyContact: "",
		address: "",
		medicalhistory: "",
		allergies: "",
	});

	useEffect(() => {
		let storedUserData = localStorage.getItem("mediai-user-data");
		console.log(storedUserData);
		if (!storedUserData) {
			toast.error("Please register first");
			navigate("/register");
			return;
		}
		storedUserData = JSON.parse(storedUserData);
		setUserData(storedUserData);

		const authToken = localStorage.getItem("mediai-auth-token");
		console.log(authToken);
		if (!authToken) {
			toast.error("Please login to continue");
			navigate("/login");
			return;
		}

		const storedUserProfile = JSON.parse(
			localStorage.getItem("mediai-profile-data"),
		);

		console.log(storedUserProfile);

		if (storedUserProfile) {
			setIsNewUser(false);
			setUserProfile(storedUserProfile);
			setProfile({
				user_id: storedUserData._id,
				name: storedUserProfile.name,
				dob: storedUserProfile.dob,
				gender: storedUserProfile.gender,
				bloodgrp: storedUserProfile.bloodgrp,
				phoneno: storedUserProfile.phoneno,
				emergencyContact:
					storedUserProfile.emergencyContact,
				address: storedUserProfile.address,
				medicalhistory:
					storedUserProfile.medicalhistory,
				allergies: storedUserProfile.allergies,
			});
		} else {
			setProfile({
				user_id: storedUserData._id,
				name: storedUserData.name,
				dob: "",
				gender: "",
				bloodgrp: "",
				phoneno: "",
				emergencyContact: "",
				address: "",
				medicalhistory: "",
				allergies: "",
			});
		}
	}, []);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setProfile((prevProfile) => {
			return {
				...prevProfile,
				[name]: value,
			};
		});
	};

	const handleSubmit = async () => {
		const res = await fetch(
			"https://mediai-server.onrender.com/profile",
			{
				method: "POST",
				headers: {
					"Content-Type": "Application/json",
					"mediai-auth-token":
						localStorage.getItem(
							"mediai-auth-token",
						),
				},
				body: JSON.stringify(profile),
			},
		);

		const data = await res.json();

		if (res.status === 200) {
			localStorage.setItem(
				"mediai-profile-data",
				JSON.stringify(data.profile),
			);
			alert("Profile added!");
			navigate("/");
		}

		setErrorMsg(data.message);
	};

	// if (!userData || (isNewUser && !userProfile)) {
	// 	return null; // or render a loading indicator
	// }

	return (
		<div className='profile-main-container'>
			<Navbar currentPage='Profile' />
			<div className='profile-container'>
				<div className='profile-heading'>
					<h2>Your Profile</h2>
					<p>{errorMsg}</p>
				</div>
				<div className='profile-inputs'>
					<input
						value={userData.name}
						name='name'
						type='text'
						placeholder='Name'
					/>
					<input
						{...(isNewUser
							? {}
							: {
									value: userProfile.dob,
							  })}
						onChange={handleChange}
						name='dob'
						type='date'
						placeholder='DOB'
					/>
					<select
						{...(isNewUser
							? {}
							: {
									value: userProfile.gender,
							  })}
						name='gender'
						onChange={handleChange}>
						<option>Gender</option>
						<option>Male</option>
						<option>Female</option>
						<option>Other</option>
					</select>
					<select
						{...(isNewUser
							? {}
							: {
									value: userProfile.bloodgrp,
							  })}
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
						{...(isNewUser
							? {}
							: {
									value: userProfile.phoneno,
							  })}
					/>
					<input
						onChange={handleChange}
						name='emergencyContact'
						type='number'
						placeholder='Emergency Contact No.'
						{...(isNewUser
							? {}
							: {
									value: userProfile.emergencyContact,
							  })}
					/>
					<input
						onChange={handleChange}
						name='address'
						className='full-input'
						type='text'
						placeholder='Address'
						{...(isNewUser
							? {}
							: {
									value: userProfile.address,
							  })}
					/>
					<input
						onChange={handleChange}
						name='medicalhistory'
						className='full-input'
						type='text'
						placeholder='Medical History'
						{...(isNewUser
							? {}
							: {
									value: userProfile.medicalhistory,
							  })}
					/>
					<input
						onChange={handleChange}
						name='allergies'
						className='full-input'
						type='text'
						placeholder='Allergies if any'
						{...(isNewUser
							? {}
							: {
									value: userProfile.allergies,
							  })}
					/>
				</div>
				<div className='profile-submit'>
					{isNewUser ? (
						<button onClick={handleSubmit}>
							Submit
						</button>
					) : (
						<button onClick={handleSubmit}>
							Update
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Profile;
