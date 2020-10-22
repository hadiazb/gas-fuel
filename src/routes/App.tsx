import * as React from 'react';
import {
	Route,
	Switch,
	BrowserRouter as Routes,
} from 'react-router-dom';
import Home from '../containers/Home/index';
import NotFound from '../containers/NotFound/index';
import Login from '../containers/Login/index';
import Register from '../containers/Register/index';

const App = () => {
	return (
		<Routes>
			<Switch>
				<Route component={Home} path='/' exact />
				<Route component={Login} path='/login' exact />
				<Route component={Register} path='/register' exact />
				<Route component={NotFound} path='/error' />
			</Switch>
		</Routes>
	);
};

export default App;
