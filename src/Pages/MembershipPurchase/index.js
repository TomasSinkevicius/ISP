import React from 'react';

import { useFirebase } from '../../Context/firebase/FirebaseContext.js';
import Header from '../../Components/Header/header.js';

const MembeshipScreen = (props) => {
	const { history } = props;
	const { user, userLoading } = useFirebase();

	function changeMembership() {
		alert('Narystė nusipirkta! Dabar galite žiūrėti filmus be apribojimų');
	  }

	return userLoading ? null : (
		<div>
			<Header />
			<div className='account-screen-container'>
				<h1 className='account-screen-title'>Narystės įsigyjimas</h1>
				<div className='account-screen-info-container'>
					<div className='account-info-holder'>
						<h3 className='account-info-title'>Turima narystė :</h3>
						<p className='account-info-content'>{user.membership}</p>
					</div>
					
				</div>
			</div>
			<div className='account-screen-container'>
			<h1 className='membership-purchase'>Galimos įsigyti narystės</h1>
					<div className='account-info-holder'>
						<h3 className='account-info-title'>Įsigyti filmų žiūrėjimą be jokių apribojimų ---{'>'} </h3>
						<button on onClick={changeMembership} className='membership-info-content'>VIP</button>
					</div>
			</div>
		</div>
	);
};

export default MembeshipScreen;