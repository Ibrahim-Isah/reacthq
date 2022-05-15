import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { TestimonialCard } from './Cards';

const Testimonial = () => {
	const arrowStyles = {
		position: 'absolute',
		zIndex: 2,
		top: 'calc(50% - 15px)',
		width: 50,
		height: 50,
		borderRadius: '50%',
		backgroundColor: '#FFFFFF',
		cursor: 'pointer',
	};
	return (
		<div>
			<h1 className='text-center my-5 font-[700] text-[36px]'>
				Testimonial From Past Interns
			</h1>
			<div
				style={{
					background: `url('assets/blues.png')`,
					backgroundPosition: 'center',
					backgroundSize: 'auto',
					backgroundRepeat: 'no-repeat',
					height: '100%',
				}}
				className='min-h-[520px]'
			>
				<div>
					<Carousel
						inifiniteLoop
						renderArrowNext={(onClickHandler, hasNext, label) =>
							hasNext && (
								<button
									type='button'
									onClick={onClickHandler}
									title={label}
									style={{ ...arrowStyles, right: 15 }}
								>
									&gt;
								</button>
							)
						}
						renderArrowPrev={(onClickHandler, hasPrev, label) =>
							hasPrev && (
								<button
									type='button'
									onClick={onClickHandler}
									title={label}
									style={{ ...arrowStyles, left: 15 }}
								>
									&lt;
								</button>
							)
						}
					>
						{carousel.map((testimonial, index) => {
							return (
								<div
									key={index}
									className='flex items-center justify-center mt-16'
								>
									<TestimonialCard
										name={testimonial.name}
										details={testimonial.details}
									/>
								</div>
							);
						})}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;

const carousel = [
	{
		name: 'Kehinde Oderinde',
		details:
			'“Interesting and eventful. Our instructor has been impacting knowledge in us to become great in the skill just as he is” ',
	},
	{
		name: 'Okundayo Doings',
		details: 'React is a programming language for building user interfaces.',
	},
];
