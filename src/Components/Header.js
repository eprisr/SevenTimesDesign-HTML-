import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/seventimes-vertical.png';

class Header extends React.Component {
	render() {
		return (
			<React.Fragment>
				<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div className='container'>
					<Link to='/' className='navbar-brand'>
							<img src={ logo } alt ="" height="20"></img>
					</Link>
					<button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse justify-content-end align-items-center' id='navbarSupportedContent'>
						<ul className='navbar-nav'>
							<a className='nav-item nav-link' href='#home'>Home</a>
							<a className='nav-item nav-link' href='#portfolio'>Portfolio</a>
							<a className='nav-item nav-link' href='#about'>About</a>
						</ul>
					</div>
				</div>
			</nav>
			</React.Fragment>
		);
	}
}

export default Header;