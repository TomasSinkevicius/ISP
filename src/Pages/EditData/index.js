import React from 'react';

import { useFirebase } from '../../Context/firebase/FirebaseContext.js';
import Header from '../../Components/Header/header.js';

const EditDataScreen = (props) => {
	const { history } = props;
	const { logout, user, userLoading } = useFirebase();
	return userLoading ? null : (
		<div>
			<Header />
            <div>
			<h1>Duomenų redagavimas</h1>
		    </div>
		</div>
	);
};

export default EditDataScreen;