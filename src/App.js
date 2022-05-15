import React, { Suspense } from 'react';
import Login from './pages/login';
import Landing from './pages/landing';
import NotFound from './pages/notFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Router>
			<Suspense fallback={<p>Loading...</p>}>
				<Switch>
					<Route path='/login' component={Login} exact />
					<Route path='/' component={Landing} exact />
					<Route component={NotFound} />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
