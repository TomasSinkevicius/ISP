import React from 'react';

import Header from '../../Components/Header/header.js';

import { useFirebase } from '../../Context/firebase/FirebaseContext.js';

const AccountScreen = (props) => {
	const { history } = props;
	const { logout, user, userLoading } = useFirebase();

	const routeChangeAdd = () => {
		history.push(`../../addData/${user.uid}`);
	};

	const routeChangeEdit = () => {
		history.push(`../../editData/${user.uid}`);
	};

	return userLoading ? null : (
		<div>
			<Header />
			<div className='account-screen-container'>
				<h1 className='account-screen-title'>Paskyros duomenys</h1>
				<div className='account-screen-info-container'>
					<div className='account-info-holder'>
						<h3 className='account-info-title'>El. paštas: </h3>
						<p className='account-info-content'>{user.email}</p>
					</div>
					<div className='account-info-holder'>
						<h3 className='account-info-title'>Naudotojo taškai: </h3>
						<p className='account-info-content'>{user.points}</p>
					</div>
					<div className='account-info-holder'>
						<h3 className='account-info-title'>Naudotojo tipas: </h3>
						<p className='account-info-content'>{user.type}</p>
					</div>
					<div className='account-info-holder'>
						<h3 className='account-info-title'>Naudotojo narystė: </h3>
						<p className='account-info-content'>{user.membership}</p>
					</div>
					<div className='account-info-holder' onClick={routeChangeAdd}>
						<h3 className='account-info-add-data'>Pridėti duomenis</h3>
					</div>
					<div className='account-info-holder' onClick={routeChangeEdit}>
						<h3 className='account-info-add-data'>Redaguoti duomenis</h3>
					</div>
					<div className='account-info-holder' onClick={() => logout(history)}>
						<h3 className='account-info-signout'>Atsijungti</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccountScreen;
