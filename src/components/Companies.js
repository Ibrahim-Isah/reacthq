import React from 'react';

const Companies = () => {
	return (
		<div className='my-16 w-4/5 mx-auto md:mx-0 md:w-full'>
			<h1 className='my-5 font-[700] text-[36px]'>Our Partners</h1>
			<div className='block space-y-20 md:space-y-0 md:flex md:items-center md:justify-evenly'>
				{companies.map((company, index) => {
					return (
						<div key={index}>
							<img
								src={company}
								alt='company'
								className='mx-auto h-4/5 md:h-full'
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Companies;

const companies = [
	'assets/jobber.png',
	'assets/master.png',
	'assets/mint.png',
	'assets/metro.png',
];
