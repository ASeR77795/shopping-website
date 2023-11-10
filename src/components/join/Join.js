import React from 'react';
import './Join.scss';
function Join() {
	return (
		<section className='join'>
			<div className='box container'>
				<h3 className='title'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h3>
				<p className='text'>
					Type your email down below and be young wild generation
				</p>
				<form className='form'>
					<input
						className='input'
						type='email'
						placeholder='Add your email here'
					/>
					<button className='button' type='button'>
						SEND
					</button>
				</form>
			</div>
		</section>
	);
}

export default Join;
