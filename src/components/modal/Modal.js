import React, { useState } from 'react';
import './Modal.scss';

const Modal = ({ isOpen, toggleModal }) => {
	const [isModalOpen, setIsModalOpen] = useState(isOpen);

	const internalToggleModal = () => {
		setIsModalOpen(!isModalOpen);
		toggleModal();
	};

	return (
		<div className={`login-container ${isModalOpen ? 'open-modal' : ''}`}>
			{isModalOpen && (
				<>
					<div className='modal'>
						<button className='close-button' onClick={internalToggleModal}>
							&times;
						</button>
						<h2>Login</h2>
						<form>
							<label htmlFor='username'>Username:</label>
							<input type='text' id='username' name='username' required />

							<label htmlFor='password'>Password:</label>
							<input type='password' id='password' name='password' required />

							<button type='submit'>Login</button>
						</form>
					</div>

					<div className='overlay' onClick={internalToggleModal}></div>
				</>
			)}
		</div>
	);
};

export default Modal;
