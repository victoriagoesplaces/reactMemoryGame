import React from 'react';
import './Navbar.css';

function Navbar(props) {
	return(
	<div className="navbar-fixed">
		<nav>
			<div className="nav-wrapper container">
				<a href="/" className='brand-logo left'>Clicky Game</a>
				<ul className='right'>
					<li>Score: {props.score}</li>
					<li >Top Score: {props.topScore}</li>
				</ul>
			</div>
		</nav>
	</div>
	)
}

export default Navbar;