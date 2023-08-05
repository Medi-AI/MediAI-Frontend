import React from "react";

import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
	const user = localStorage.getItem("mediai-user-data");
	return (
		<>
			<div className='main-home '>
				<Navbar currentPage='Home' />
				<div className='heading-div'>
					<h1>
						Better Healthcare, Smarter
						Decisions
					</h1>
					<p>
						MediAI leverages AI technology
						for accurate diagnoses, doctor
						recommendations, and smarter
						medical records management.
					</p>
					<div className='btn-div'>
						<a
							href='predict'
							className='predict-button'>
							<button>Predict</button>
						</a>
						{user ? (
							<a
								href='upload'
								className='sec-button'>
								<button>
									Upload
								</button>
							</a>
						) : (
							<a
								href='login'
								className='sec-button'>
								<button>
									Login
								</button>
							</a>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
