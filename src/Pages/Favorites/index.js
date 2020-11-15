import React from 'react';

import Header from '../../Components/Header/header.js';
import Footer from '../../Components/Footer/footer.js';
import Content from '../../Components/Content/content.js';

const FavoritesScreen = () => {
	return (
		<div className='home-wrapper'>
			<Header />
			<h1 style={{ textAlign: 'center' }}>User favorite movie list</h1>
			<Content />
			<Footer />
		</div>
	);
};

export default FavoritesScreen;
