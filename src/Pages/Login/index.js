import React, { useState } from 'react';

const LoginScreen = () => {
	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});

	const onItemChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const onSubmitPress = () => {
		console.log(userData);
	};
	return (
		<div className='login-screen-container'>
			<h1 className='login-screen-title'>Login</h1>
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
			<button className='auth-primary-button' onClick={() => onSubmitPress()}>
				Submit
			</button>
			<a className='auth-link' href='/register'>
				Don't have an account? Register here
			</a>
		</div>
	);
};

export default LoginScreen;
