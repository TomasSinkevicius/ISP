import React from 'react';
import Ret, { useEffect, useState } from 'react';

import Header from '../../Components/Header/header.js';
import Footer from '../../Components/Footer/footer.js';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Comments from '../../Components/Comments/index.js';
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import {useFirebase} from "../../Context/firebase/FirebaseContext";


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