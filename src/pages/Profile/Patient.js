import React from "react";
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
						type='text'
						placeholder='Username'
					/>
					<input
						type='text'
						placeholder='Username'
					/>
					<input
						type='text'
						placeholder='Username'
					/>
					<input
						className='full-input'
						type='text'
						placeholder='Username'
					/>
					<input
						className='full-input'
						type='text'
						placeholder='Username'
					/>
					<input
						className='full-input'
						type='text'
						placeholder='Username'
					/>
					<input
						className='full-input'
						type='text'
						placeholder='Username'
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
