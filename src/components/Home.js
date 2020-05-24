import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'; //to change page title
import { Link } from 'react-router-dom';
import bulls from '../assets/img/chip.jpg';
const Home = () => (
	<Fragment> 
		<Helmet><title>Quiz App-Home</title></Helmet>

		<div id= "home">
			<section>
				<h1>The Last Dance</h1>
				<div className="play-button-container">
					<ul>
						<li><Link className="play-button" to="/play/instructions">Play</Link></li>
					</ul>
				</div>

				<div className = "auth-container">
					<Link to = "./login" className="auth-buttons" id="login-button">Login</Link>
					<Link to = "./register" className="auth-buttons" id="signup-button">Register</Link>
				</div>
				<div className = "bulls-photo">
					<img src = { bulls } alt = "bulls photo" />
				</div>
			</section>
		</div>
	</Fragment>
	
	);
export default Home;