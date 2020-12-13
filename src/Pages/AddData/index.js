import React from 'react';

import { useFirebase } from '../../Context/firebase/FirebaseContext.js';
import Header from '../../Components/Header/header.js';

const AddDataScreen = (props) => {
	const { history } = props;
	const { logout, user, userLoading } = useFirebase();

	function changeSucessful() {
		alert('Duomenys pridėti!');
	  }

	return userLoading ? null : (
		<div>
			<Header />
			<div className='login-screen-container'>
				<h1 className='login-screen-title'>Pridėti duomenis</h1>
				<input
					className='auth-input'
					type='text'
					name='email'
					placeholder='El. paštas'
				/>
				<button on onClick={changeSucessful} className='auth-primary-button' >
					Išsaugoti
				</button>
			</div>
		</div>
	);

};

export default AddDataScreen;