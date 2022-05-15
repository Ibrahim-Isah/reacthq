import React from 'react';
import { Button } from './Button';

export const CardSmall = ({ title, details }) => {
	return (
		<div className='rounded-tr-[50px] rounded-b-xl rounded-tl-xl p-14 min-h-[400px] w-[90%] mx-auto md:mx-0 bg-white md:max-w-lg'>
			<h2 className='font-[700] text-[24px] mb-6'>{title}</h2>
			<p className='font-[400] text-[24px] leading-[44px]'>{details}</p>
		</div>
	);
};

export const ButtonCard = ({ title, details, buttonText }) => {
	return (
		<div className='rounded-xl p-12 w-full mx-auto md:mx-0 bg-white flex flex-col items-center space-y-5'>
			<h2 className='font-[700] text-[24px] '>{title}</h2>
			<p className='font-[400] max-w-lg text-[24px] leading-[44px]'>
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
