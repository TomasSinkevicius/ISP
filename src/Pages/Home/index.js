import React from 'react';

import Header from '../../Components/Header/header.js';
import Footer from '../../Components/Footer/footer.js';
import Content from '../../Components/Content/content.js';

const HomeScreen = () => {
	return (
		<div className='home-wrapper'>
			<Header />
			<h1 style={{ textAlign: 'center' }}>Top action movies of all time</h1>
			<Content />
			<Footer />
		</div>
	);
};

export default HomeScreen;
