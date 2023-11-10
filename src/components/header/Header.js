import React from 'react';
import './Header.scss';
import logo from '../../img/logo.png';
const Header = () => {
	return (
		<>
			<header className='header container'>
				<nav className='nav'>
					<div className='logo'>
						<img src={logo} />
					</div>
					<div className='menu'>
						<button type='button'>CATALOGUE</button>
						<button type='button'>FASHION</button>
						<button type='button'>FAVOURITE</button>
						<button type='button'>LIFESTYLE</button>
						<button type='button'>SIGN UP</button>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
