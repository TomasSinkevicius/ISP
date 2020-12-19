import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FirebaseProvider from './Context/firebase/FirebaseProvider';

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
import MembeshipScreen	from './Pages/MembershipPurchase';
import PointsScreen from './Pages/PointsPurchase';
import AddDataScreen from './Pages/AddData';
import EditDataScreen from './Pages/EditData';
import AdminScreen from "./Pages/Admin";

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
				<Route
					exact
					path='/naryste/:id'
					component={(props) => <MembeshipScreen	 {...props} />}
				/>	
				<Route
					exact
					path='/naryste/:id'
					component={(props) => <MembeshipScreen	 {...props} />}
				/>		
				<Route
					exact
					path='/taskai/:id'
					component={(props) => <PointsScreen	 {...props} />}
				/>
				<Route
					exact
					path='/addData/:id'
					component={(props) => <AddDataScreen	 {...props} />}
				/>
				<Route
					exact
					path='/editData/:id'
					component={(props) => <EditDataScreen	 {...props} />}
				/>
				<Route
					exact
					path='/admin'
					component={(props) => <AdminScreen	 {...props} />}
				/>
				EditDataScreen
			</Switch>
		</Router>
	);
};

const WrappedApp = () => (
	<FirebaseProvider>
		<App />
	</FirebaseProvider>
);

export default WrappedApp;
