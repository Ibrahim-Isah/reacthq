import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from './Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Sidebar = () => {
	const history = useHistory();
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<>
			<div className='md:hidden bg-gray-100'>
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog
						as='div'
						className='fixed inset-0 flex z-40 md:hidden'
						onClose={setSidebarOpen}
					>
						<Transition.Child
							as={Fragment}
							enter='transition-opacity ease-linear duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='transition-opacity ease-linear duration-300'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
						</Transition.Child>
						<Transition.Child
							as={Fragment}
							enter='transition ease-in-out duration-300 transform'
							enterFrom='-translate-x-full'
							enterTo='translate-x-0'
							leave='transition ease-in-out duration-300 transform'
							leaveFrom='translate-x-0'
							leaveTo='-translate-x-full'
						>
							<div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white'>
								<Transition.Child
									as={Fragment}
									enter='ease-in-out duration-300'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='ease-in-out duration-300'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'
								>
									<div className='absolute top-0 right-0 -mr-12 pt-2'>
										<Button
											variant='borderless'
											onClick={() => setSidebarOpen(false)}
										>
											<span className='sr-only'>Close sidebar</span>
											<img
												src='assets/close.png'
												alt='close menu'
												className='h-44 w-44'
											/>
										</Button>
									</div>
								</Transition.Child>
								<div className='sidebar-header px-2 mb-1 mt-5 ml-5'>
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
								<nav className='px-2 space-y-5 py-14 bg-white'>
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
								</nav>
							</div>
						</Transition.Child>
						<div className='flex-shrink-0 w-14' aria-hidden='true'>
							{/* Dummy element to force sidebar to shrink to fit close icon */}
						</div>
					</Dialog>
				</Transition.Root>
				<div className='md:pl-64 flex flex-col flex-1 '>
					<div className='sticky top-0 z-10 flex-shrink-0 px-4 flex h-14 bg-white shadow'>
						<button
							type='button'
							className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none md:hidden'
							onClick={() => setSidebarOpen(true)}
						>
							<span className='sr-only'>Open sidebar</span>
							<svg
								width='21'
								height='15'
								viewBox='0 0 21 15'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M1.08154 7.80371H19.0815M1.08154 1.80371H19.0815M1.08154 13.8037H19.0815'
									stroke='#344054'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
