import React from 'react';

import Header from '../../Components/Header/header.js';

import { useFirebase } from '../../Context/firebase/FirebaseContext.js';

const AccountScreen = (props) => {
	const { history } = props;
	const { logout, user, loading } = useFirebase();
	return loading ? null : (
		<div>
			<Header />
			<div className='account-screen-container'>
				<h1 className='account-screen-title'>Account details</h1>
				<div className='account-screen-info-container'>
					<div className='account-info-holder'>
						<h3 className='account-info-title'>Email: </h3>
						<p className='account-info-content'>{user.email}</p>
					</div>
					<div className='account-info-holder'>
						<h3 className='account-info-title'>User points: </h3>
						<p className='account-info-content'>{user.points}</p>
					</div>
					<div className='account-info-holder'>
						<h3 className='account-info-title'>User status: </h3>
						<p className='account-info-content'>{user.type}</p>
					</div>
					<div className='account-info-holder' onClick={() => logout(history)}>
						<h3 className='account-info-signout'>Sign out</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccountScreen;
