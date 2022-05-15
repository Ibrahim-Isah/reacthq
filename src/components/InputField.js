import React from 'react';
import clsx from 'clsx';

const InputField = ({
	className,

	type,
	placeholder,
	inputProps,
}) => {
	return (
		<div className={clsx(className, 'my-3')}>
			<div className='mt-1 relative rounded-md'>
				<input
					type={type}
					{...inputProps}
					placeholder={placeholder}
					className='border border-gray-300 border-solid mx-4 md:mx-0 rounded-md py-4 my-1 px-5 text-[18px] w-[90%] md:w-full bg-white'
				/>
			</div>
		</div>
	);
};

export default InputField;
