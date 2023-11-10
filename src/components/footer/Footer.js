import React from 'react';
import './Footer.scss';
import facebook from '../../img/link/f.svg';
import twitter from '../../img/link/twitter.svg';
import instagram from '../../img/link/insta.svg';

const Footer = () => {
	return (
		<>
			<footer className='footer'>
				<div className='box'>
					<div className='links'>
						<p className='title'>FASHION</p>
						<p className='text'>
							Complete your style with awesome clothes from us.
						</p>
						<div className='media'>
							<a href='#'>
								<img src={facebook} />
							</a>
							<a href='#'>
								<img src={instagram} />
							</a>
							<a href='#'>
								<img src={twitter} />
							</a>
						</div>
					</div>
					<div className='link-menu'>
						<div className='company'>
							<p>Company</p>
							<div>
								<a href='#'>About</a>
							</div>
							<div>
								<a href='#'>Contact us</a>
							</div>
							<div>
								<a href='#'>Support</a>
							</div>
							<div>
								<a href='#'>Careers</a>
							</div>
						</div>
						<div className='quick'>
							<p>Quick Link</p>
							<div>
								<a href='#'>Share Location</a>
							</div>
							<div>
								<a href='#'>Orders Tracking</a>
							</div>
							<div>
								<a href='#'>Size Guide</a>
							</div>
							<div>
								<a href='#'>FAQs</a>
							</div>
						</div>
						<div className='legal'>
							<p>Legal</p>
							<div>
								<a href='#'>Terms & conditions</a>
							</div>
							<div>
								<a href='#'>Privacy Policy</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
