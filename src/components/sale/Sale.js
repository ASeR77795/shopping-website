import React from 'react';
import './Sale.scss';
import photo from '../../img/sale_girl.png';

const Sale = () => {
	return (
		<section className='sale'>
			<div className='photo'>
				<img src={photo} />
			</div>
			<div className='content'>
				<div>
					<p className='title white'>PAYDAY</p>
					<p className='title'>SALE NOW</p>
					<p className='description'>
						Spend minimal $100 get 30% off voucher code for your next purchase
					</p>
					<p className='date'>1 June - 10 June 2021</p>
					<p className='terms'>*Terms & Conditions apply</p>
					<button className='button' type='button'>
						SHOP NOW
					</button>
				</div>
			</div>
		</section>
	);
};

export default Sale;
