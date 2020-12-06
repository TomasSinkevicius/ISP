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
		if (firebase.apps.length === 0) {
			connection = firebase.initializeApp(firebaseConfig);
		}
	}
	return connection;
};

getConnection();

const database = getConnection().firestore();
const auth = getConnection().auth();

const FirebaseProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const getUserObject = async (response) => {
		let userDoc = await database.collection('users').get();
		userDoc = userDoc.docs.filter((doc) => doc.data().uid === response.uid);
		return userDoc[0]?.data();
	};

	const register = (email, password, history) => {
		const reg = auth.createUserWithEmailAndPassword(email, password);
		reg.catch((e) => {
			return e.message;
		});
		auth.onAuthStateChanged(async (firebaseUser) => {
			if (firebaseUser) {
				const { uid, email } = firebaseUser;
				const userObj = {
					uid,
					email,
					type: 'user',
					points: 2,
					favorites: [],
				};
				await database.collection('users').doc(uid).set(userObj);
				setUser(userObj);
				history.push('/');
			}
		});
	};

	const login = (email, password, history) => {
		const log = auth.signInWithEmailAndPassword(email, password);
		log.catch((e) => {
			return e.message;
		});
		auth.onAuthStateChanged(async (firebaseUser) => {
			if (firebaseUser) {
				const userData = await getUserObject(firebaseUser);
				setUser(userData);
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
		const unsubscribe = app.auth().onAuthStateChanged(async (firebaseUser) => {
			if (firebaseUser !== user) {
				const userData = await getUserObject(firebaseUser);
				setUser(userData);
				setLoading(false);
			}
		});
		return unsubscribe;
	}, []);

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
