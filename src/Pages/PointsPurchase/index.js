import React from 'react';

import { useFirebase } from '../../Context/firebase/FirebaseContext.js';
import Header from '../../Components/Header/header.js';

const PointsScreen = (props) => {
	const { history } = props;
	const { logout, user, userLoading } = useFirebase();
	return userLoading ? null : (
        <div>
            <Header />
            <div>
			<h1>Taškų įsigyjimas</h1>
		    </div>
        </div>
	);
};

export default PointsScreen;