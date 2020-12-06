import React, { useEffect, useState } from 'react';
import FirebaseContext from './FirebaseContext';
import firebase from 'firebase/app';
import app from 'firebase/app';

require('firebase/auth');
require('firebase/firestore');

const firebaseConfig = {
	apiKey: 'AIzaSyBzn-ZxghrSq0vxj3XXAkQh103Iyjbj2HM',
	authDomain: 'filmusistema.firebaseapp.com',
	projectId: 'filmusistema',
	storageBucket: 'filmusistema.appspot.com',
	messagingSenderId: '18385951163',
	appId: '1:18385951163:web:bc009b6201eacaa9dacc9e',
};

let connection;

const getConnection = () => {
	if (!connection) {
		// TODO - fix initialize on refresh
		connection = firebase.initializeApp(firebaseConfig);
	}
	return connection;
};

getConnection();

// const database = getConnection().firestore();
const auth = getConnection().auth();

const FirebaseProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const register = (email, password, history) => {
		const reg = auth.createUserWithEmailAndPassword(email, password);
		reg.catch((e) => {
			return e.message;
		});
		auth.onAuthStateChanged((firebaseUser) => {
			if (firebaseUser) {
				setUser(firebaseUser);
				history.push('/');
			}
		});
	};

	const login = (email, password, history) => {
		const log = auth.signInWithEmailAndPassword(email, password);
		log.catch((e) => {
			return e.message;
		});
		auth.onAuthStateChanged((firebaseUser) => {
			if (firebaseUser) {
				setUser(firebaseUser);
				history.push('/');
			}
		});
	};

	const logout = (history) => {
		auth.signOut();
		setUser(null);
		history.push('/');
	};

	useEffect(() => {
		const unsubscribe = app.auth().onAuthStateChanged((res) => {
			console.log('user res', res);
			if (res !== user) {
				setUser(res);
				setLoading(false);
			}
		});

		return unsubscribe;
	});

	return (
		<FirebaseContext.Provider
			value={{
				register,
				login,
				logout,
				loading,
				user,
			}}
		>
			{children}
		</FirebaseContext.Provider>
	);
};

export default FirebaseProvider;
