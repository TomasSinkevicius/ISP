import React, { useState } from 'react';

import { useFirebase } from '../../Context/firebase/FirebaseContext.js';
import Header from '../../Components/Header/header.js';

const AddDataScreen = (props) => {
	const [phoneInput, setPhoneInput] = useState('');
	const [cityInput, setCityInput] = useState('');
	const { history } = props;
	const { user, userLoading, setUserInfo } = useFirebase();

	const addData = () => {
		setUserInfo({ phone: phoneInput, city: cityInput });
		history.push(`/account/${user.uid}`);
	};

	return userLoading ? null : (
		<div>
			<Header />
			<div className='login-screen-container'>
				<h1 className='login-screen-title'>Pridėti duomenis</h1>
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
				<button onClick={() => addData()} className='auth-primary-button'>
					Išsaugoti
				</button>
			</div>
		</div>
	);
};

export default AddDataScreen;
