import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
	return (
		<div className='App'>
			<div className='text-xl text-green-500'>
				Hello World, Welcome to bitmama Isah Ibrahim. We are happy to have you
				as our new employee
			</div>
			<Counter />
		</div>
	);
}

export default App;
