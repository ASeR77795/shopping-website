import React from 'react';
import './Favourite.scss';
import left from '../../img/left.png';
import right from '../../img/right.png';
import arrow from '../../img/arrow.svg';

const Favourite = () => {
	return (
		<section className='favourite'>
			<div className='container'>
				<h3 className='title'>Young’s Favourite</h3>
				<div className='box'>
					<div>
						<img src={left} />
						<div className='content'>
							<div>
								<p className='text'>Trending on instagram</p>
								<p className='action'>Explore Now!</p>
							</div>
							<div className='btn-box'>
								<button type='button'>
									<img src={arrow} />
								</button>
							</div>
						</div>
					</div>
					<div>
						<img src={right} />
						<div className='content'>
							<div>
								<p className='text'>All Under $40</p>
								<p className='action'>Explore Now!</p>
							</div>
							<div className='btn-box'>
								<button type='button'>
									<img src={arrow} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Favourite;
