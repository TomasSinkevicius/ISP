import React, { useEffect, useState } from 'react';

import Header from '../../Components/Header/header.js';
import Footer from '../../Components/Footer/footer.js';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { useFirebase } from '../../Context/firebase/FirebaseContext';

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

const FavoritesScreen = (props) => {
	const { history } = props;
	const classes = useStyles();

	const [loading, setLoading] = useState(true);
	const [favorites, setFavorites] = useState([]);

	const { getFavoriteMovies, user } = useFirebase();

	useEffect(() => {
		const fetchData = async () => {
			const res = await getFavoriteMovies();
			setFavorites(res);
			setLoading(false);
		};
		if (user) fetchData();
	}, [user]);

	return loading ? null : (
		<div className='home-wrapper'>
			<Header />
			<h1 style={{ textAlign: 'center' }}>User favorite movie list</h1>
			<Container className={classes.cardGrid} maxWidth='md'>
				{/* End hero unit */}
				<Grid container spacing={4}>
					{favorites.map((item) => (
						<Grid item key={item.id} xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image={item.poster}
									title='img'
								/>
								<CardContent className={classes.cardContent}>
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
					))}
				</Grid>
			</Container>
			<Footer />
		</div>
	);
};

export default FavoritesScreen;
