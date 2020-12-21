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
		dataDoc = dataDoc.docs.filter((doc) => `${doc.data().id}` === `${id}`);
		return dataDoc[0]?.data();
	};

	const getMedia = async (item) => {
		let videoRes = await videoProvider(item.id);
		videoRes = videoRes?.results?.find((item) => item.type === 'Trailer');
		if (videoRes?.key && item?.poster_path && item?.backdrop_path) {
			videoRes = `https://www.youtube.com/watch?v=${videoRes?.key}`;
			const posterRes = `https://image.tmdb.org/t/p/w500${item?.poster_path}`;
			const backdropRes = `https://image.tmdb.org/t/p/w500${item?.backdrop_path}`;
			let movieCost = 0;
			if (item?.vote_count < 1000) {
				movieCost = 1;
			} else if (item?.vote_count < 10000) {
				movieCost = 3;
			} else {
				movieCost = 5;
			}
			return {
				trailer: videoRes,
				poster: posterRes,
				backdrop: backdropRes,
				movieCost,
			};
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
	const getAllCommentReplies = async () => {
		let data = [];
		let dataDoc = await database.collection('comments-replies').get();
		dataDoc.docs.map((doc) => (data = [...data, doc.data()]));
		return data;
	};
	const getAllComments = async () => {
		let data = [];
		let dataDoc = await database.collection('comments').get();
		dataDoc.docs.map((doc) => (data = [...data, doc.data()]));
		return data;
	};

	const getRecommendedMovies = async () => {
		let data = [];
		let dataDoc = await database.collection('movies').get();
		dataDoc.docs.map((doc) => (data = [...data, doc.data()]));
		var item1 = data[Math.floor(Math.random() * data.length - 1)];
		var item2 = data[Math.floor(Math.random() * data.length - 1)];
		data = [item1, item2];
		return data;
	};

	const setMembership = async (membership) => {
		const userObj = { ...user, membership: membership };
		await database.collection('users').doc(`${user.uid}`).set(userObj);
		setUser(userObj);
	};

	const addUserPoints = async (points) => {
		const userObj = { ...user, points: user.points + points };
		await database.collection('users').doc(`${user.uid}`).set(userObj);
		setUser(userObj);
	};
	const giveUserPoints = async (user_id, user_points) => {
		var user = database.collection('users').doc(user_id);
		user
			.update({
				points: user_points + 10,
			})
			.then(function () {
				alert('Points succesfully given!');
			})
			.catch(function (error) {
				alert('Error giving points: ', error);
			});
	};

	const setUserInfo = async (info) => {
		const userObj = { ...user, ...info };
		await database.collection('users').doc(`${user.uid}`).set(userObj);
		setUser(userObj);
	};

	const removeUserPoints = async (points) => {
		const userObj = { ...user, points: user.points - points };
		await database.collection('users').doc(`${user.uid}`).set(userObj);
		setUser(userObj);
	};

	const removeMovie = async (id) => {
		database
			.collection('movies')
			.doc(id)
			.delete()
			.then(function () {
				alert('Document successfully deleted!');
			})
			.catch(function (error) {
				alert('Error removing document: ', error);
			});
	};

	const getUserObject = async (response) => {
		let userDoc = await database.collection('users').get();
		userDoc = userDoc.docs.filter((doc) => doc.data().uid === response.uid);

		let userObj = userDoc[0]?.data();
		if (userObj) {
			const today = new Date().toLocaleDateString();

			if (today !== userObj.timestamp) {
				userObj = { ...userObj, timestamp: today, points: userObj.points + 2 };
				await database.collection('users').doc(userObj.uid).set(userObj);
			}
			return userObj;
		} else return null;
	};

	const getFavoriteMovies = async () => {
		let libraryDoc = await database.collection('users-favorites').get();
		libraryDoc = libraryDoc.docs.filter((doc) => doc.data().uid === user.uid);
		return libraryDoc[0]?.data().favorites;
	};

	const addToFavorites = async (movie) => {
		const userObj = { ...user, favorites: [...user.favorites, movie.id] };
		await database.collection('users').doc(`${user.uid}`).set(userObj);
		const libraryData = await getFavoriteMovies();
		await database
			.collection('users-favorites')
			.doc(`${user.uid}`)
			.set({ uid: user.uid, favorites: [...libraryData, movie] });
		setUser(userObj);
	};

	const removeFromFavorites = async (movie) => {
		const userObj = {
			...user,
			favorites: user.favorites.filter((item) => item !== movie.id),
		};
		await database.collection('users').doc(`${user.uid}`).set(userObj);
		const libraryData = await getFavoriteMovies();
		await database
			.collection('users-favorites')
			.doc(`${user.uid}`)
			.set({
				uid: user.uid,
				favorites: libraryData.filter((item) => item.id !== movie.id),
			});

		setUser(userObj);
	};

	const register = (email, password, history) => {
		const reg = auth.createUserWithEmailAndPassword(email, password);
		reg.catch((e) => {
			alert(e.message);
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
					phone: '',
					city: '',
				};
				const libraryObj = {
					uid,
					favorites: [],
				};
				await database.collection('users').doc(uid).set(userObj);
				await database.collection('users-favorites').doc(uid).set(libraryObj);
				setUser(userObj);
				history.push('/');
			}
		});
	};
	const addComment = (body, id, user_email, user_id) => {
		var newComment = database.collection('comments').doc();
		newComment
			.set({
				id: newComment.id,
				body: body,
				movie_id: id,
				rating: 0,
				user_email: user_email,
				author_id: user_id,
			})
			.then(function () {
				alert('Comment successfully written!');
			})
			.catch(function (error) {
				alert('Error writing comment: ', error);
			});
	};
	const replyComment = (body, id, user_email, comment_id) => {
		var newComment = database.collection('comments-replies').doc();
		newComment
			.set({
				id: newComment.id,
				comment_id: comment_id,
				body: body,
				movie_id: id,
				rating: 0,
				user_email: user_email,
			})
			.then(function () {
				alert('Successfully replied!');
			})
			.catch(function (error) {
				alert('Error replying: ', error);
			});
	};
	const deleteComment = (id) => {
		database
			.collection('comments')
			.doc(id)
			.delete()
			.then(function () {
				alert('Document successfully deleted!');
			})
			.catch(function (error) {
				alert('Error removing document: ', error);
			});
	};
	const editComment = (value, id) => {
		var comment = database.collection('comments').doc(id);
		comment
			.update({
				body: value,
			})
			.then(function () {
				alert('Comment successfuly edited!');
			})
			.catch(function (error) {
				alert('Error editing comment: ', error);
			});
	};
	const increaseCommentRating = (id, rating) => {
		var comment = database.collection('comments').doc(id);
		comment
			.update({
				rating: rating + 1,
			})
			.then(function () {
				alert('Comment rating successfuly increased!');
			})
			.catch(function (error) {
				alert('Error increasing comment rating: ', error);
			});
	};
	const decreaseCommentRating = (id, rating) => {
		var comment = database.collection('comments').doc(id);
		comment
			.update({
				rating: rating - 1,
			})
			.then(function () {
				alert('Comment rating successfuly decreased!');
			})
			.catch(function (error) {
				alert('Error decreasing comment rating: ', error);
			});
	};

	const login = (email, password, history) => {
		const log = auth.signInWithEmailAndPassword(email, password);
		log.catch((e) => {
			alert(e.message);
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
				addUserPoints,
				removeUserPoints,
				addToFavorites,
				removeFromFavorites,
				getMovie,
				setMovie,
				getAllMovies,
				getRecommendedMovies,
				removeMovie,
				setMembership,
				setUserInfo,
				getFavoriteMovies,
				getAllComments,
				addComment,
				deleteComment,
				editComment,
				increaseCommentRating,
				decreaseCommentRating,
				replyComment,
				getAllCommentReplies,
				giveUserPoints,
			}}
		>
			{children}
		</FirebaseContext.Provider>
	);
};

export default FirebaseProvider;
