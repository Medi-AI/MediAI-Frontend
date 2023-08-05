import React from "react";
import "./AboutUs.css";
import Navbar from "../../components/Navbar/Navbar";

const AboutUs = () => {
	return (
		<div className='about-us'>
			<Navbar currentPage='Aboutus' />
			<div className='aboutus-heading'>
				<h1>About Us</h1>
				<div className='aboutus-heading-overlay'></div>
			</div>
			<div className='svgs-wrapper'>
				<a href='#motivation' className='svg-container'>
					<img
						alt='Bulb'
						src='Bulb.png'
						className='svg-icon'
					/>
					<p>Our Motivation </p>
				</a>
				<a href='#vision' className='svg-container'>
					<img
						alt='Vision'
						src='Vision.png'
						className='svg-icon'
					/>
					<p>Our Vision</p>
				</a>
				<a href='#team' className='svg-container'>
					<img
						alt='Team'
						src='Team.png'
						className='svg-icon'
					/>
					<p>Meet the Team</p>
				</a>
			</div>
			<div
				id='motivation'
				className='aboutus-content-wrapper'>
				<div className='aboutus-content-text'>
					<h2>Our Motivation</h2>
					<p>
						Our motivation at mediAI is
						simple - to use AI to improve
						healthcare outcomes for
						everyone. We believe healthcare
						is a fundamental right and we
						are passionate about making it
						accessibleto all. Our team is
						driven by the potential of AI to
						transform healthcare and we are
						committed to making a real
						difference in people's lives.
					</p>
				</div>
				<div className='aboutus-content-icon'>
					<img
						alt='Bulb'
						src='Bulb.png'
						className='svg-icon'
					/>
				</div>
			</div>
			<div id='vision' className='aboutus-content-wrapper'>
				<div className='aboutus-content-icon'>
					<img
						alt='Vision'
						src='Vision.png'
						className='svg-icon'
					/>
				</div>
				<div className='aboutus-content-text'>
					<h2>Our Vision</h2>
					<p>
						Our goal is to make high-quality
						health information accessible to
						everyone, regardless of their
						background or location. We
						believe that by democratizing
						access to medical knowledge, we
						can help to reduce health
						disparities and improve health
						outcomes for all.
					</p>
				</div>
			</div>
			<div id='team' className='meet-team-wrapper'>
				<h2>Meet the Team</h2>
				<div className='team-members'>
					<a
						rel='noreferrer'
						target='_blank'
						href='https://github.com/GopalSaraf'
						className='team-member'>
						<img
							src='gopal.png'
							alt='Gopal Saraf'
						/>
						<p>Gopal Saraf</p>
					</a>
					<a
						rel='noreferrer'
						target='_blank'
						href='https://github.com/OzDiya'
						className='team-member'>
						<img
							src='diya.png'
							alt='Diya Oswal'
						/>
						<p>Diya Oswal</p>
					</a>
					<a
						rel='noreferrer'
						target='_blank'
						href='https://github.com/sabaneriddhi'
						className='team-member'>
						<img
							src='riddhi.png'
							alt='Riddhi Sabane'
						/>
						<p>Riddhi Sabane</p>
					</a>
					<a
						rel='noreferrer'
						target='_blank'
						href='https://github.com/parthsali'
						className='team-member'>
						<img
							src='parth2.jpg'
							alt='Parth Sali'
						/>
						<p>Parth Sali</p>
					</a>

					<a
						rel='noreferrer'
						target='_blank'
						href='https://github.com/mugdha0611'
						className='team-member'>
						<img
							src='mugdha.png'
							alt='Mugdha Kulkarni'
						/>
						<p>Mugdha Kulkarni</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
