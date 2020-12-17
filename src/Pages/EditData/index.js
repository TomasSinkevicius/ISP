import React from 'react';

import { useFirebase } from '../../Context/firebase/FirebaseContext.js';
import Header from '../../Components/Header/header.js';


const EditDataScreen = (props) => {
	let phoneInput = React.createRef();
	let cityInput = React.createRef();
	const { history } = props;
	const { user, userLoading, setPhone, setCity} = useFirebase();

	const addData = (phone, city) => {
		setPhone(phone);
		setCity(city);
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
					ref={phoneInput}
					className='auth-input'
					type='text'
					name='phone'
					placeholder='Telefono numeris'
				/>
				<input
					ref={cityInput}
					className='auth-input'
					type='text'
					name='city'
					placeholder='Miestas'
				/>
				<button 
				onClick={() => addData(phoneInput.current.value, cityInput.current.value)}
				className='auth-primary-button' >
					Išsaugoti
				</button>
			</div>
		</div>
	);
};

export default EditDataScreen;