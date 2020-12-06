import React, { useState } from 'react';

import { useFirebase } from '../../Context/firebase/FirebaseContext';

const RegisterScreen = (props) => {
	const { history } = props;
	const { register } = useFirebase();

	const [userData, setUserData] = useState({
		email: '',
		password: '',
		repeatedPassword: '',
	});

	const onItemChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const onSubmitPress = () => {
		if (userData.email !== '' && userData.password !== '') {
			if (userData.password === userData.repeatedPassword) {
				register(userData.email, userData.password, history);
				// TODO - render firebase response
			}
		}
	};
	return (
		<div className='login-screen-container'>
			<h1 className='login-screen-title'>Register</h1>
			<input
				className='auth-input'
				type='text'
				name='email'
				placeholder='Email'
				onChange={onItemChange}
			/>
			<input
				className='auth-input'
				type='password'
				name='password'
				placeholder='Password'
				onChange={onItemChange}
			/>
			<input
				className='auth-input'
				type='password'
				name='repeatedPassword'
				placeholder='Confirm password'
				onChange={onItemChange}
			/>
			<button className='auth-primary-button' onClick={() => onSubmitPress()}>
				Submit
			</button>
		</div>
	);
};

export default RegisterScreen;
