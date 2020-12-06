import React from 'react';

import { useFirebase } from '../../Context/firebase/FirebaseContext';

import UserProfileWidget from '../../assets/images/placeholder-profile.jpg';

const Header = () => {
	const { user, loading } = useFirebase();

	const UserHeader = () => (
		<div className='header__top-nav'>
			<a className='header__top-nav-item' href='/'>
				Filmai
			</a>
			<a className='header__top-nav-item' href={`/favorites/${user.uid}`}>
				Favoritai
			</a>
			<a className='header__top-nav-item' href='/forum'>
				Forumas
			</a>
			<figure className='header__top-nav-item user-profile-widget'>
				<a href={`/account/${user.uid}`}>
					<img src={UserProfileWidget} alt='user profile' />
				</a>
			</figure>
		</div>
	);

	const GuestHeader = () => (
		<div className='header__top-nav'>
			<a className='header__top-nav-item' href='/login'>
				Prisijungti
			</a>
			<a className='header__top-nav-item' href='/register'>
				Registruotis
			</a>
		</div>
	);

	return (
		<header className='header'>
			{loading ? null : user ? <UserHeader /> : <GuestHeader />}
		</header>
	);
};

export default Header;
