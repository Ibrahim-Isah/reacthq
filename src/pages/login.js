import React from 'react';
import { Button } from '../components/Button';
import Header from '../components/Header';
import InputField from '../components/InputField';

const Login = () => {
	return (
		<div className='container mx-auto mt-8 mb-24 font-[Montserrat]'>
			<Header />
			<div className='block space-y-5 md:space-y-0  md:grid md:grid-cols-2 md:gap-3 my-16 items-center'>
				<div className='w-full mx-3 md:mx-0 items-center space-y-5 max-w-lg'>
					<h3 className='text-[40px]  font-[700]'>
						Join The World Of Tech With Zero Skills Needed
					</h3>
					<p className='text-[24px] font-[400] leading-[44px] max-w-md'>
						Start developing in-demand skills and become a strong part of the
						world’s technological workforce.
					</p>
				</div>
				<div className='block space-y-5 md:space-y-0 md:flex md:justify-evenly md:items-center'>
					<img
						src='assets/start.png'
						alt='images of student'
						className='h-64 md:w-64 w-4/5 rounded-lg mx-auto'
					/>
					<img
						src='assets/last.png'
						alt='images of student'
						className='h-64 md:w-64 w-4/5 rounded-lg mx-auto'
					/>
				</div>
			</div>
			<div className='max-w-3xl'>
				<form>
					<div className='block md:grid md:grid-cols-2 md:space-x-3'>
						<InputField type='text' placeholder='First name' />
						<InputField type='text' placeholder='Last name' />
					</div>
					<InputField type='text' placeholder='Email Address' />
					<InputField type='text' placeholder='Enter your phone number' />
					<InputField
						type='text'
						placeholder='Enter your minyt bank account No.'
					/>
					<Button
						type='submit'
						variant='primary'
						text='Submit'
						className='w-[90%] mx-4 md:mx-0 md:w-full py-4 px-16 font-bold text-[18px]'
					/>
				</form>
			</div>
		</div>
	);
};

export default Login;
