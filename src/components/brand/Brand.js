import React from 'react';
import logo2 from '../../img/brand/obey.svg';
import logo3 from '../../img/brand/shopify.svg';
import logo4 from '../../img/brand/lacoste.svg';
import logo5 from '../../img/brand/levis.png';
import logo6 from '../../img/brand/amazon.svg';
import './Brand.scss';

const Brand = () => {
	return (
		<section className='brand container-lg'>
			<div className='container'>
				{' '}
				<div className='brand__box'>
					<div className='box'>
						<img src={logo2} />
					</div>
					<div className='box'>
						<img src={logo3} />
					</div>
					<div className='box'>
						<img src={logo4} />
					</div>
					<div className='box'>
						<img src={logo5} />
					</div>
					<div className='box'>
						<img src={logo6} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brand;
