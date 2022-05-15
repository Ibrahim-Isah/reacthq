import React from 'react';

const Testimonial = () => {
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
					position: 'relative',
				}}
				className='min-h-[520px]'
			>
				<div className='absolute'>doings</div>
			</div>
		</div>
	);
};

export default Testimonial;
