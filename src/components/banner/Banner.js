import React from 'react';
import leaf from '../../img/leaf.png';
import photo from '../../img/photog.png';
import star from '../../img/Star.png';
import './Banner.scss';

const Banner = () => {
	return (
		<section className='banner container'>
			<div className='cover'>
				<div className='content'>
					<h1 className='title'>
						<span className='white'>LET’S</span>
						<span>EXPLORE</span>
						<span className='yellow'>UNIQUE</span>
						<span>CLOTHES.</span>
					</h1>
					<p className='text'>Live for Influential and Innovative fashion!</p>
					<div className='box'>
						<img src={leaf} />
						<button type='button' className='button'>
							Shop Now
						</button>
					</div>
				</div>
				<div className='photo'>
					<img className='pic' src={photo} />
					<img className='icon star' src={star} />
					<img className='icon star1' src={star} />
					<img className='icon star2' src={star} />
					<img className='icon star3' src={star} />
				</div>
			</div>
		</section>
	);
};

export default Banner;
