import React, { useState } from 'react';

import { useFirebase } from '../../Context/firebase/FirebaseContext.js';
import Header from '../../Components/Header/header.js';

const EditDataScreen = (props) => {
	const [phoneInput, setPhoneInput] = useState('');
	const [cityInput, setCityInput] = useState('');
	const { history } = props;
	const { user, userLoading, setUserInfo } = useFirebase();

	const editData = () => {
		setUserInfo({ phone: phoneInput, city: cityInput });
		history.push(`/account/${user.uid}`);
	};

	return userLoading ? null : (
		<div>
			<Header />
			<div className='login-screen-container'>
				<div className='account-info-holder'>
					<h3 className='account-info-title'>Dabartinis telefono numeris: </h3>
					<p className='account-info-content'>{user.phone}</p>
				</div>
				<div className='account-info-holder'>
					<h3 className='account-info-title'>Dabartinis miestas: </h3>
					<p className='account-info-content'>{user.city}</p>
				</div>
				<h1 className='login-screen-title'>Pakeisti duomenis</h1>
				<input
					onChange={(e) => setPhoneInput(e.target.value)}
					className='auth-input'
					type='text'
					name='phone'
					placeholder='Telefono numeris'
				/>
				<input
					onChange={(e) => setCityInput(e.target.value)}
					className='auth-input'
					type='text'
					name='city'
					placeholder='Miestas'
				/>
				<button onClick={() => editData()} className='auth-primary-button'>
					Išsaugoti
				</button>
			</div>
		</div>
	);
};

export default EditDataScreen;
