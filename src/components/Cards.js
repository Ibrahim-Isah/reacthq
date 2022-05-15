import React from 'react';
import { Button } from './Button';

export const CardSmall = ({ title, details }) => {
	return (
		<div className='rounded-tr-[50px] rounded-b-xl rounded-tl-xl px-4 py-8 md:p-14 min-h-[400px] w-[90%] mx-auto md:mx-0 bg-white md:max-w-lg'>
			<h2 className='font-[700] text-[18px] md:text-[24px] mb-6'>{title}</h2>
			<p className='font-[400] text-[18px] md:text-[24px] leading-[44px]'>
				{details}
			</p>
		</div>
	);
};

export const ButtonCard = ({ title, details, buttonText }) => {
	return (
		<div className='rounded-xl px-4 py-8 md:p-12  mx-auto md:mx-0 bg-white w-[90%] flex flex-col items-center space-y-5'>
			<h2 className='font-[700] text-[18px] md:text-[24px] '>{title}</h2>
			<p className='font-[400] max-w-lg text-[18px] md:text-[24px] leading-[44px]'>
				{details}
			</p>
			<Button
				variant='primary'
				text={buttonText}
				className='text-[18px] px-10 py-3 font-semibold'
			/>
		</div>
	);
};

export const TestimonialCard = ({ name, details }) => {
	return (
		<div className='rounded-xl px-14 py-8 md:p-12 my-auto mx-auto md:mx-0 bg-white w-[90%] md:w-3/6 flex flex-col items-start space-y-5'>
			<p className='font-[400] max-w-lg text-[24px] md:text-[24px] leading-[44px]'>
				{details}
			</p>
			<div className='flex items-center justify-center'>
				<img
					src='assets/profile.png'
					alt='testimonial'
					className='h-14 w-[5px] max-w-[65px]'
				/>
				<p className='text-[18px]'>{name}</p>
			</div>
		</div>
	);
};
