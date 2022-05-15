import React from 'react';
import { ButtonCard, CardSmall } from './Cards';

const Skills = () => {
	return (
		<div className='bg-gradient-to-b from-blue-500 via-sky-500 to-indigo-500 pt-10 pb-16'>
			<div className='text-white text-center my-10'>
				<h2 className='text-[36px] font-[700] mb-4'>
					WHAT DO YOU STAND TO GAIN?
				</h2>
				<p className=' text-[24px] md:text-[36px] max-w-4xl mx-auto'>
					You really don’t have valuable time or money to waste, so why not
					learn in a proven way?
				</p>
			</div>
			<div className='mx-auto w-full md:w-4/5 md:grid md:grid-cols-2 md:gap-4 block space-y-5 md:space-y-0'>
				{data.map((item) => (
					<CardSmall title={item.title} details={item.details} />
				))}
			</div>
			<div className='w-full md:w-4/5 my-12 mx-auto'>
				<ButtonCard
					title='Get Certified'
					buttonText='Become a ReActor'
					details='We are offering highly competitive and recognizable certificates to our graduates.'
				/>
			</div>
		</div>
	);
};

export default Skills;

export const data = [
	{
		title: 'Real Life Employable Skills',
		details:
			'Our quality curriculum is designed with top- tier industry partners, so you learn the high-impact skills that top companies want.',
	},
	{
		title: 'Project Based Learning',
		details:
			'Our Classrooms revolves around the students, and we are focused on helping you excel. Learn by doing real-world projects and other hands- on exercises.',
	},
	{
		title: 'Network with Industry Experts',
		details:
			'An expert on our team will work with you to understand your goals, technical needs, and team dynamics.',
	},
	{
		title: 'Hybrid Training',
		details:
			'Students can study online, in-person at one of our several campuses or both!',
	},
];
