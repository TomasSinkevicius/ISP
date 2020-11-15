import React from 'react';

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

const cards = [1, 2, 3, 4, 5, 6];

const DetailsScreen = (props) => {
	const history = useHistory();

	return (
		<div className='background-blur-wrapper'>
			<Header />
			<div className='movie-details-container'>
				<div className='movie-details-content-container'>
					<h1 className='movie-details-title'>Movie title</h1>
					<p className='movie-details-description'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum.
					</p>
					<div className='movie-details-button-section'>
						<Button
							size='large'
							color='primary'
							onClick={() => history.push(`/movie/playback/${1}`)}
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
					<h2 className='movie-details-title-secondary'>Related movies</h2>
					<Grid
						container
						direction='row'
						justify='flex-start'
						alignItems='center'
					>
						{cards.map((card, index) => (
							<Grid item key={card}>
								<Card className='movie-details-related-section-card'>
									<CardMedia
										className='movie-details-related-section-cardmedia'
										image='https://source.unsplash.com/random'
										title='Image title'
									/>
									<CardContent className='movie-details-related-section-cardcontent'>
										<Typography gutterBottom variant='h5' component='h2'>
											Heading
										</Typography>
										<Typography>
											This is a media card. You can use this section to describe
											the content.
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											onClick={() => history.push(`/movie/${index}`)}
											size='small'
											color='primary'
										>
											View
										</Button>
										<Button size='small' color='primary'>
											Edit
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default DetailsScreen;
