import React from 'react';
import { Button } from './Button';

const Hero = () => {
	return (
		<div className='my-12 md:my-24'>
			<div className='block space-y-5 md:space-y-0  md:grid md:grid-cols-2 md:gap-3 my-16 items-center'>
				<div className='w-full mx-3 md:mx-0 items-center space-y-5 max-w-lg'>
					<h3 className='text-[40px]  font-[700]'>
						Join The World Of Tech With Zero Skills Needed
					</h3>
					<p className='text-[24px] font-[400] leading-[44px] max-w-md'>
						Start developing in-demand skills and become a strong part of the
						world’s technological workforce.
					</p>
					<Button
						variant='primary'
						text='Register Here'
						className='w-4/5 mx-4 md:mx-0 md:w-3/5 py-4 px-16 font-bold text-[18px]'
					/>
				</div>
				<div className='align-middle'>
					<div className='block space-y-24 mt-24 md:mt-auto md:space-y-0 md:flex md:justify-evenly md:items-center'>
						<div className='relative mx-auto h-44 w-56 bg-white border-2 border-[#106FA8] z-0'>
							<img
								src='assets/woman.png'
								alt='images of student'
								className='h-64 md:w-64 w-4/5 rounded-lg absolute z-10 bottom-0'
							/>
						</div>
						<div className='relative h-44 w-56 mx-auto bg-white border-2 border-[#F3723F] z-0'>
							<img
								src='assets/man.png'
								alt='images of student'
								className='h-64 md:w-64 w-4/5 rounded-lg  absolute z-10 bottom-0'
							/>
						</div>
					</div>
					<div className='my-10 space-y-6'>
						<div className='w-3/5 md:w-full mx-auto space-y-5 md:space-y-0 flex flex-col md:flex-row md:justify-evenly md:items-center'>
							<Button
								variant='normal'
								className='bg-[#106FA8] px-10 '
								text='Front End Development'
							/>
							<Button
								variant='normal'
								className='bg-[#12BB0F] px-10'
								text='Project Management'
							/>
						</div>
						<div className='w-3/5 md:w-full mx-auto space-y-5 md:space-y-0 flex flex-col md:flex-row md:justify-evenly md:items-center'>
							<Button
								variant='normal'
								className='bg-[#2510A8] px-4'
								text='Product Design'
							/>
							<Button
								variant='normal'
								className='bg-[#10A88D] px-4'
								text='Motion Graphics'
							/>
							<Button
								variant='normal'
								className='bg-[#EA6A62] px-4'
								text='Wordpress'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
