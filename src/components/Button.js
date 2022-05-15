import React from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Button = ({ text, variant, className, ...restProps }) => {
	const history = useHistory();
	return (
		<button
			onClick={() => {
				history.push('/login');
				window.location.reload();
			}}
			{...restProps}
			className={clsx(className, ButtonVariant[variant])}
		>
			{text}
		</button>
	);
};

export const ButtonVariant = {
	primary:
		'bg-[#F3723F] text-white rounded-lg shadow-lg hover:bg-[#F3723F] hover:text-white',
	secondary:
		'bg-white text-[#F3723F] border border-[#F3723F] rounded-lg shadow-lg hover:bg-white hover:text-[#F3723F]',
	borderless: 'border-0 bg-white text-[#F3723F]',
	normal: 'border-0 text-white p-2 rounded text-[18px]',
};
