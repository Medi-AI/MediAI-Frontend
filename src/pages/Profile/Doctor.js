import React from "react";
import {useParams} from "react-router-dom";
import "./Profile.css";

const Profile = () => {
	return (
		<div className='profile-main-container'>
			<div className='profile-container'>
				<div className='profile-heading'>
					<h2>Hey welcome, Parth</h2>
				</div>
				<div className='profile-inputs'>
					<input
						type='text'
						placeholder='Username'
					/>
					<input
						type='number'
						placeholder='AGE'
					/>

					<select>
						<option>Gender</option>
						<option>Male</option>
						<option>Female</option>
						<option>Gay</option>
						<option>Lesbian</option>
						<option>Other</option>
					</select>
					<select>
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
						className='full-input'
						type='text'
						placeholder='Address'
					/>
					<input
						className='full-input'
						type='text'
						placeholder='Medical History'
					/>
					<input
						className='full-input'
						type='text'
						placeholder='Allergies if any'
					/>
					<input
						className='full-input'
						type='text'
						placeholder='Emergency Contact'
					/>
				</div>
				<div className='profile-submit'>
					<button>Submit</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;
