import React from 'react';

import Ret, { useEffect, useState } from 'react';

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

import {useFirebase} from "../../Context/firebase/FirebaseContext";



import { useHistory } from 'react-router-dom';

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


const ForumScreen = () => {
	const history = useHistory();
	const classes = useStyles();

	const { getAllThemes } = useFirebase();

	const [loading, setLoading] = useState(true);
	const [themes, setThemes] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getAllThemes();
			setThemes(res);
			setLoading(false);
		};
		fetchData();
	}, []);

	

	return loading ? null : (
		<div>
			<Header />

					{themes.map((item) => (
					<div className='forum-screen-container'>
							<div className='forum-screen-sections-container'>
								<div className='forum-screen-section'>
									<h1 className='forum-section-title'>{item.theme}</h1>
									<p className='forum-section-description'>
										{item.text}
									</p>
									
							<h3
								onClick={() => history.push({
									pathname : `/forum/1`,
									state: item.theme	
									})}
								className='forum-section-link'
							>
								View
							</h3>
						</div>
					</div>
				</div>
				))}


			
		</div>
	);
};

export default ForumScreen;
