import React from 'react';

import { useFirebase } from '../../Context/firebase/FirebaseContext.js';
import Header from '../../Components/Header/header.js';

const AddDataScreen = (props) => {
	let phoneInput = React.createRef();
	let cityInput = React.createRef();
	const { history } = props;
	const { user, userLoading, setPhone, setCity } = useFirebase();

	const addData = (phone, city) => {
		setPhone(phone);
		setCity(city);
		history.push(`/account/${user.uid}`);
	};

	return userLoading ? null : (
		<div>
			<Header />
			<div className='login-screen-container'>
				<h1 className='login-screen-title'>Pridėti duomenis</h1>
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

export default AddDataScreen;