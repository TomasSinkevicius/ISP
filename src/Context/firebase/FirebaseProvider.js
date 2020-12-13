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

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9605aec422629ad892b8117a42723abc';

const dataProvider = async () => {
	let data = [];
	const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;

	await fetch(url)
		.then((res) => res.json())
		.then((dataRes) => (data = [...dataRes.results]));

	return data;
};

const videoProvider = async (id) => {
	let data = {};
	const url = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`;

	await fetch(url)
		.then((res) => res.json())
		.then((dataRes) => (data = dataRes));

	return data;
};

const FirebaseProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [userLoading, setUserLoading] = useState(true);

	const getMovie = async (id) => {
		let dataDoc = await database.collection('movies').get();
		dataDoc = dataDoc.docs.filter((doc) => doc.data().id === id);
		return dataDoc[0]?.data();
	};

	const getMedia = async (item) => {
		let videoRes = await videoProvider(item.id);
		videoRes = videoRes?.results?.find((item) => item.type === 'Trailer');
		if (videoRes?.key && item?.poster_path && item?.backdrop_path) {
			videoRes = `https://www.youtube.com/watch?v=${videoRes?.key}`;
			const posterRes = `https://image.tmdb.org/t/p/w500${item?.poster_path}`;
			const backdropRes = `https://image.tmdb.org/t/p/w500${item?.backdrop_path}`;
			return { trailer: videoRes, poster: posterRes, backdrop: backdropRes };
		} else return null;
	};

	const setMovie = async (id, movie) => {
		let media = await getMedia(movie);
		if (media) {
			let movieObj = { ...movie, ...media };
			await database.collection('movies').doc(`${id}`).set(movieObj);
		} else return;
	};

	const getAllMovies = async () => {
		let data = [];
		let dataDoc = await database.collection('movies').get();
		dataDoc.docs.map((doc) => (data = [...data, doc.data()]));
		return data;
	};

	const setMembership = async () => {
		let data = [];
		let dataDoc = await database.collection('membership').get();
		dataDoc.docs.map((doc) => (data = [...data, doc.data()]));
		return data;
	}

	const removeMovie = async (id) => {};

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
					membership: 'paprasta',
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
			}
			setUserLoading(false);
		});
		return unsubscribe;
	}, []);

	return (
		<FirebaseContext.Provider
			value={{
				register,
				login,
				logout,
				userLoading,
				user,
				getMovie,
				setMovie,
				getAllMovies,
				removeMovie,
				setMembership,
			}}
		>
			{children}
		</FirebaseContext.Provider>
	);
};

export default FirebaseProvider;
