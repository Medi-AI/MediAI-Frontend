import React from "react";

import "./Home.css";
import Particle from "../../components/Particle";
import Navbar from "../../components/Navbar/Navbar";
import SlidingCard from "../../components/SlidingCard";

const Home = () => {
	return (
		<>
			<div className='main-home'>
				<Navbar />
				<Particle />
			</div>
		</>
	);
};

export default Home;
