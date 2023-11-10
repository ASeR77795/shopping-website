import React, { useState } from 'react';
import './Header.scss';
import logo from '../../img/logo.png';
import Modal from '../modal/Modal';

const Header = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisible = () => {
		setIsVisible(prevState => !prevState);
	};

	return (
		<>
			<header className='header container'>
				<nav className='nav'>
					<div className='logo'>
						<img src={logo} alt='Logo' />
					</div>
					<div className='menu'>
						<button type='button'>CATALOGUE</button>
						<button type='button'>FASHION</button>
						<button type='button'>FAVOURITE</button>
						<button type='button' onClick={toggleVisible}>
							SIGN UP
						</button>
					</div>
				</nav>
				{isVisible && <Modal isOpen={isVisible} toggleModal={toggleVisible} />}
			</header>
		</>
	);
};

export default Header;
