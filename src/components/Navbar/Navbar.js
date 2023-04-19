import React, {useState} from "react";
import "./Navbar.css";

function Navbar({currentPage}) {
	const [isOpen, setIsOpen] = useState(false);

	function handleToggleClick() {
		setIsOpen(!isOpen);
	}

	return (
		<div>
			<div
				className={
					isOpen
						? "button_container active"
						: "button_container"
				}
				id='toggle'
				onClick={handleToggleClick}>
				<span className='top'></span>
				<span className='middle'></span>
				<span className='bottom'></span>
			</div>
			<div
				className={isOpen ? "overlay open" : "overlay"}
				id='overlay'>
				<nav className='overlay-menu'>
					<ul>
						<li>
							<a
								href='/'
								className={
									currentPage ===
									"Home"
										? "active"
										: ""
								}>
								Home
							</a>
						</li>
						<li>
							<a
								href='/predict'
								className={
									currentPage ===
									"Predict"
										? "active"
										: ""
								}>
								Predict
							</a>
						</li>
						<li>
							<a
								href='/upload'
								className={
									currentPage ===
									"Upload"
										? "active"
										: ""
								}>
								Upload
							</a>
						</li>
						<li>
							<a
								href='/profile'
								className={
									currentPage ===
									"Profile"
										? "active"
										: ""
								}>
								Profile
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Navbar;
