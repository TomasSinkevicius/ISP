import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

import Comments from '../../Components/Comments/index.js';
import Header from '../../Components/Header/header.js';

import { useFirebase } from '../../Context/firebase/FirebaseContext';

const DetailsScreen = (props) => {
	const { match, location } = props;
	const history = useHistory();
	const {
		getMovie,
		getRecommendedMovies,
		user,
		removeUserPoints,
	} = useFirebase();

	const [asset, setAsset] = useState({});
	const [recommended, setRecommended] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getMovie(match?.params?.id);
			const recommendedRes = await getRecommendedMovies(res);
			setAsset(res);
			setRecommended(recommendedRes);
			setLoading(false);
		};
		fetchData();
	}, [location.pathname]);

	return loading ? null : (
		<div
			className='background-blur-wrapper'
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(${asset.backdrop})`,
			}}
		>
			<Header />
			<div className='movie-details-container'>
				<div className='movie-details-content-container'>
					<h1 className='movie-details-title'>{asset.title}</h1>
					<p className='movie-details-description'>{asset.overview}</p>
					<div className='movie-details-button-section'>
						<Button
							size='large'
							color='primary'
							onClick={() => {
								if (
									user?.points >= asset?.movieCost ||
									user?.membership === 'VIP'
								) {
									history.push(`/movie/playback/${asset.id}`);
									if (user?.membership !== 'VIP')
										removeUserPoints(asset.movieCost);
								} else alert('You dont have enough points to watch this movie');
							}}
						>
							Play
						</Button>
						<Button size='large' color='primary'>
							Add to favorites
						</Button>
					</div>
				</div>
				<Comments />
				<div className='movie-details-related-section'>
					<h2 className='movie-details-title-secondary'>Recommended movies</h2>
					<Grid container direction='row'>
						{recommended.map(
							(item) =>
								item && (
									<Grid item key={`${item.id}-recommended`}>
										<Card className='movie-details-related-section-card'>
											<CardMedia
												className='movie-details-related-section-cardmedia'
												image={item.poster}
												title='img'
											/>
											<CardContent className='movie-details-related-section-cardcontent'>
												<Typography gutterBottom variant='h5' component='h2'>
													{item.title}
												</Typography>
											</CardContent>
											<CardActions>
												<Button
													onClick={() => history.push(`/movie/${item.id}`)}
													size='small'
													color='primary'
												>
													View
												</Button>
											</CardActions>
										</Card>
									</Grid>
								)
						)}
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default DetailsScreen;
