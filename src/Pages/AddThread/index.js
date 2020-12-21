import React, { useState } from 'react';

import { useFirebase } from '../../Context/firebase/FirebaseContext';

const AddThreadScreen = (props) => {
	const { history } = props;
	const { login } = useFirebase();

	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});

	const onItemChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const onSubmitPress = () => {
		if (userData.email !== '' && userData.password !== '') {
			login(userData.email, userData.password, history);
			// TODO - render firebase response
		}
	};

	return (
		<div className='login-screen-container'>
			<h1 className='login-screen-title'>Add a new thread</h1>
			<input
				className='auth-input'
				type='text'
				name='email'
				placeholder='Thread title'
				onChange={onItemChange}
			/>
			<input
				className='auth-input'
				type='password'
				name='password'
				placeholder='Theme'
				onChange={onItemChange}
			/>
			<input
				className='auth-input'
				type='password'
				name='password'
				placeholder='Thread text'
				onChange={onItemChange}
			/>

			<button className='auth-primary-button' onClick={() => onSubmitPress()}>
				Submit
			</button>
		</div>
	);
};

export default AddThreadScreen;
