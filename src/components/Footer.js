/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button } from './Button';
const Footer = () => {
	return (
		<div className='bg-black text-white p-10'>
			<div>
				<img src='assets/logo2.png' alt='logo' className='h-16 w-22' />
			</div>
			<div className='block md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-5 space-y-12 md:space-y-0 my-12'>
				<ul className='space-y-3'>
					<li className=' text-2xl'>Quick Links</li>
					<li>
						<a href='#' className='text-xl'>
							Build with us
						</a>
					</li>
					<li>
						<a href='#' className='text-xl'>
							Hire talents
						</a>
					</li>
					<li>
						<a href='#' className='text-xl'>
							FAQ
						</a>
					</li>
					<li>
						<a href='#' className='text-xl'>
							Our program
						</a>
					</li>
				</ul>

				<ul className='space-y-3'>
					<li className=' text-2xl'>Company</li>
					<li>
						<a href='#' className='text-xl'>
							About
						</a>
					</li>
					<li>
						<a href='#' className='text-xl'>
							Blog
						</a>
					</li>
					<li>
						<a href='#' className='text-xl'>
							Join our team
						</a>
					</li>
					<li>
						<a href='#' className='text-xl'>
							Events
						</a>
					</li>
					<li>
						<a href='#' className='text-xl'>
							Contact us
						</a>
					</li>
				</ul>

				<ul className='space-y-3'>
					<li className=' text-2xl'>Contact</li>
					<li>
						<a href='#' className='text-xl'>
							hi@reactHQ.dev
						</a>
					</li>
					<li>
						<a href='#' className='text-xl'>
							+234-915-467-5121
						</a>
					</li>
				</ul>

				<ul className='space-y-3'>
					<li className=' text-2xl'>Legal</li>
					<li>
						<a href='#' className='text-xl'>
							Privacy policy
						</a>
					</li>
					<li>
						<a href='#' className='text-xl'>
							Terms of service
						</a>
					</li>
				</ul>

				<ul className='space-y-3'>
					<li className=' text-2xl'>Subscribe</li>
					<li>
						<a href='#' className='text-xl'>
							Stay informed, subscribe to our newsletter
						</a>
					</li>
					<li>
						<input
							type='text'
							placeholder='Enter your email'
							className='border border-gray-300 border-solid rounded-md py-3 my-1 px-5 text-[18px] w-[90%] md:w-full text-gray-300 bg-black'
						/>
						<Button
							text='Subscribe!'
							variant='secondary'
							className='bg-black rounded-md py-3 my-1 px-5 text-[18px] w-[90%] md:w-full'
						/>
					</li>
				</ul>
			</div>
			<div>
				<div className='w-full bg-white h-2 my-5' />
				<div className='block md:flex md:justify-between md:items-center'>
					<p className='text-xl'>
						&copy; 2022 ReactHQ- ReactHQ, Sprint and Spaces are Trademarks of
						Hydratech Software Solutions Ltd. Lagos
					</p>
					<div className=''>
						<ul className='flex items-center justify-evenly space-x-6'>
							<li>
								<button className='btn '>
									<i className='fa fa-facebook h-10 w-10'></i>
								</button>
							</li>
							<li>
								<button className='btn'>
									<i className='fa fa-twitter h-10 w-10'></i>
								</button>
							</li>
							<li>
								<button className='btn'>
									<i className='fa fa-instagram h-10 w-10'></i>
								</button>
							</li>
							<li>
								<button className='btn'>
									<i className='fa fa-linkedin h-10 w-10'></i>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
