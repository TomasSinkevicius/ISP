import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/css/home.scss';
import './assets/css/details.scss';
import './assets/css/content.scss';
import './assets/css/header.scss';
import './assets/css/footer.scss';

import HomeScreen from './Pages/Home';
import DetailsScreen from './Pages/Details';

const App = () => {

	return (
		<Router>
			<Switch>
				<Route
					exact
					path='/'
					component={(props) => (
						<HomeScreen {...props} />
					)}
				/>
				<Route
					exact
					path="/movie/:id"
					component={(props) => (
						<DetailsScreen {...props} />
					)}
				/>
			</Switch>
		</Router>
	);
}

export default App;