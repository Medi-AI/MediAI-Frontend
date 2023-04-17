import React from "react";
import Logo from "../../images/logo/logo-no-background.png";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className='nav-container'>
			<img src={Logo} alt='error' />
			<ul>
				<li>
					<a href='/login'>Login</a>
				</li>
				<li>
					<a href='/register'>Register</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
