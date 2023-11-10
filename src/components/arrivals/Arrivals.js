import React from 'react';
import arrow from '../../img/arrow.svg';
import hoodie from '../../img/good/hoodie.png';
import coat from '../../img/good/coat.png';
import tees from '../../img/good/tees.png';
import './Arrivals.scss';

const Arrivals = () => {
	return (
		<section className='container'>
			<div className='arrivals'>
				<h2 className='title'>NEW ARRIVALS</h2>
				<div className='good-box'>
					{' '}
					<div className='good'>
						<img src={hoodie} />
						<div className='box'>
							<div>
								<h4>Hoodies & Sweetshirt</h4>
								<p>Explore Now!</p>
							</div>
							<button type='button'>
								<img src={arrow} />
							</button>
						</div>
					</div>
					<div className='good'>
						<img src={coat} />
						<div className='box'>
							<div>
								<h4>Coats & Parkas</h4>
								<p>Explore Now!</p>
							</div>
							<button type='button'>
								<img src={arrow} />
							</button>
						</div>
					</div>
					<div className='good'>
						<img src={tees} />
						<div className='box'>
							<div>
								<h4>Tees & T-Shirt</h4>
								<p>Explore Now!</p>
							</div>
							<button type='button'>
								<img src={arrow} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Arrivals;
