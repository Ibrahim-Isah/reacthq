import React from 'react';
import { Button } from './Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
	const history = useHistory();
	return (
		<div className='flex justify-between items-center '>
			<div>
				<img
					src='assets/logo.png'
					alt='logo'
					className='h-16 w-22 cursor-pointer'
					onClick={() => {
						history.push('/');
						window.location.reload();
					}}
				/>
			</div>
			<div>
				<Button
					text='FAQS'
					variant='borderless'
					className='py-4 px-16 mx-5 font-bold text-[18px]'
				/>
				<Button
					text='Sign in'
					variant='secondary'
					className='py-4 px-16 mx-5 font-bold text-[18px]'
				/>
				<Button
					text='Sign up'
					variant='primary'
					className='py-4 px-16 mx-5 font-bold text-[18px] '
				/>
			</div>
		</div>
	);
};

export default Header;
