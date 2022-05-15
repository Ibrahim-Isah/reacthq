import React from 'react';

const Pathway = () => {
	return (
		<div className='my-16'>
			<h1 className='text-center my-5 font-[700] text-[36px]'>
				Our Program Pathway
			</h1>
			<div className='block mx-auto w-4/5 md:w-full space-y-7 md:space-y-0 md:flex md:items-center md:justify-evenly'>
				<div className='border border-gray-300 max-w-[300px] '>
					<img
						src={dataPath[0].image}
						alt='beginner stage'
						className='h-1/2  w-full mx-auto'
					/>
					<div className='space-y-3 px-4 my-4'>
						<h1 className='text-[24px] '>{dataPath[0].title}</h1>
						<p className='text-[18px]'>{dataPath[0].description}</p>
					</div>
					<div className='flex flex-col items-end justify-items-end relative mx-4 my-4'>
						<img src='assets/badge.png' alt='doing' />
						<p className='absolute text-white top-5 right-4 font-bold'>
							{dataPath[0].price}
						</p>
					</div>
				</div>
				<div className='hidden md:inline-flex'>
					<img src='assets/arrow.png' alt='doings' />
				</div>
				<div className='border border-gray-300 max-w-[300px]'>
					<img
						src={dataPath[1].image}
						alt='beginner stage'
						className='h-1/2  w-full mx-auto'
					/>
					<div className='space-y-3 px-4 my-4'>
						<h1 className='text-[24px] '>{dataPath[1].title}</h1>
						<p className='text-[18px]'>{dataPath[1].description}</p>
					</div>
					<div className='flex flex-col items-end justify-items-end relative mx-4 my-4'>
						<img src='assets/badge.png' alt='doing' />
						<p className='absolute text-white top-5 right-4 font-bold'>
							{dataPath[1].price}
						</p>
					</div>
				</div>
				<div className='hidden md:inline-flex'>
					<img src='assets/arrow.png' alt='doings' />
				</div>
				<div className='border border-gray-300 max-w-[300px]'>
					<img
						src={dataPath[2].image}
						alt='beginner stage'
						className='h-1/2  w-full mx-auto'
					/>
					<div className='space-y-3 px-4 my-4'>
						<h1 className='text-[24px] '>{dataPath[2].title}</h1>
						<p className='text-[18px]'>{dataPath[2].description}</p>
					</div>
					<div className='flex flex-col items-end justify-items-end relative mx-4 my-4'>
						<img src='assets/badge.png' alt='doing' />
						<p className='absolute text-white top-5 right-4 font-bold'>
							{dataPath[2].price}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pathway;

export const dataPath = [
	{
		image: 'assets/first.png',
		title: 'Beginners',
		price: 'FREE',
		description: 'You get to pass through 4 weeks of intensive training',
	},
	{
		image: 'assets/second.png',
		title: 'Intermediate',
		price: '$37',
		description: 'You get to pass through 4 weeks of intensive training',
	},
	{
		image: 'assets/third.png',
		title: 'Professional',
		price: '$150',
		description: 'You get to pass through 4 weeks of intensive training',
	},
];
