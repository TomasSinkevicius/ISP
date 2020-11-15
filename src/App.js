import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/css/home.scss';
import './assets/css/details.scss';
import './assets/css/content.scss';
import './assets/css/header.scss';
import './assets/css/footer.scss';
import './assets/css/comments.scss';
import './assets/css/login.scss';
import './assets/css/account.scss';
import './assets/css/forum.scss';

import HomeScreen from './Pages/Home';
import FavoritesScreen from './Pages/Favorites';
import DetailsScreen from './Pages/Details';
import PlayerScreen from './Pages/Player';
import LoginScreen from './Pages/Login';
import RegisterScreen from './Pages/Register';
import AccountScreen from './Pages/Account';
import ForumScreen from './Pages/Forum';
import ForumItemScreen from './Pages/ForumItem';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route
					exact
					path='/'
					component={(props) => <HomeScreen {...props} />}
				/>
				<Route
					exact
					path='/login'
					component={(props) => <LoginScreen {...props} />}
				/>
				<Route
					exact
					path='/register'
					component={(props) => <RegisterScreen {...props} />}
				/>
				<Route
					exact
					path='/forum'
					component={(props) => <ForumScreen {...props} />}
				/>
				<Route
					exact
					path='/forum/:id'
					component={(props) => <ForumItemScreen {...props} />}
				/>
				<Route
					exact
					path='/account/:id'
					component={(props) => <AccountScreen {...props} />}
				/>
				<Route
					exact
					path='/favorites/:id'
					component={(props) => <FavoritesScreen {...props} />}
				/>
				<Route
					exact
					path='/movie/:id'
					component={(props) => <DetailsScreen {...props} />}
				/>
				<Route
					exact
					path='/movie/playback/:id'
					component={(props) => <PlayerScreen {...props} />}
				/>
			</Switch>
		</Router>
	);
};

export default App;
