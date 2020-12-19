import React from 'react';

import { useFirebase } from '../../Context/firebase/FirebaseContext';

import UserProfileWidget from '../../assets/images/placeholder-profile.jpg';

const Header = () => {
	const { user, userLoading } = useFirebase();

	const UserHeader = () => (
		<div className='header__top-nav'>
			<a className='header__top-nav-item' href={`/naryste/${user.uid}`}>
				Narystės pirkimas
			</a>
			<a className='header__top-nav-item' href={`/taskai/${user.uid}`}>
				Taškų pirkimas
			</a>
			<a className='header__top-nav-item' href='/'>
				Filmai
			</a>
			<a className='header__top-nav-item' href={`/favorites/${user.uid}`}>
				Favoritai
			</a>
			<a className='header__top-nav-item' href='/forum'>
				Forumas
			</a>
			<a className='header__top-nav-item' href='/admin'>
				Admin
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
			{userLoading ? null : user ? <UserHeader /> : <GuestHeader />}
		</header>
	);
};

export default Header;
