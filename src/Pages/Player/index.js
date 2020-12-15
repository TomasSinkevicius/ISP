import React, { useEffect, useState } from 'react';

import { useFirebase } from '../../Context/firebase/FirebaseContext';

const PlayerScreen = (props) => {
	const { match } = props;
	const { getMovie } = useFirebase();

	const [trailer, setTrailer] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getMovie(match?.params?.id);
			const videoId = res?.trailer;
			var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
			var regex = videoId?.match(regExp);
			if (regex && regex[2]?.length == 11) {
				setTrailer(regex[2]);
				setLoading(false);
			} else {
				//error
			}
		};
		fetchData();
	}, []);

	// hacked player
	if (!loading)
		document.getElementById(
			'player-container'
		).innerHTML = `<iframe id="video" src="https://www.youtube.com/embed/${trailer}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><style>body{margin; 0; overflow: hidden;}#video{position:absolute;left:0px;width:100%;top:0px;height:100%;}</style>';`;

	return (
		<div
			id='player-container'
			style={{ height: '100vh', width: '100vw', backgroundColor: 'black' }}
		></div>
	);
};

export default PlayerScreen;
