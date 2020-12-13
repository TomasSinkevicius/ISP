import React from 'react';

import { useFirebase } from '../../Context/firebase/FirebaseContext.js';
import Header from '../../Components/Header/header.js';

const PointsScreen = (props) => {
	const { history } = props;
	const { logout, user, userLoading } = useFirebase();

	function addPoints() {
		alert('Taškai pridėti!');
	  }

	return userLoading ? null : (
		<div>
			<Header />
			<div className='account-screen-container'>
				<h1 className='account-screen-title'>Taškų pirkimas</h1>
				<div className='account-screen-info-container'>
					<div className='account-info-holder'>
						<h3 className='account-info-title'>Taškų likutis :</h3>
						<p className='account-info-content'>{user.points}</p>
					</div>
					
				</div>
			</div>
			<div className='account-screen-container'>
			<h1 className='membership-purchase'>Galimos taškų pirkimo sumos</h1>
					<div className='account-info-holder'>
						<h3 className='account-info-title'>Nusipirkti 25 taškus ---{'>'} </h3>
						<button on onClick={addPoints} className='membership-info-content'>Pirkti</button>
					</div>
					<div className='account-info-holder'>
						<h3 className='account-info-title'>Nusipirkti 50 taškų ---{'>'} </h3>
						<button on onClick={addPoints} className='membership-info-content'>Pirkti</button>
					</div>
					<div className='account-info-holder'>
						<h3 className='account-info-title'>Nusipirkti 100 taškų ---{'>'} </h3>
						<button on onClick={addPoints} className='membership-info-content'>Pirkti</button>
					</div>
					<div className='account-info-holder'>
						<h3 className='account-info-title'>Nusipirkti 200 taškų ---{'>'} </h3>
						<button on onClick={addPoints} className='membership-info-content'>Pirkti</button>
					</div>
			</div>
		</div>
	);
};

export default PointsScreen;