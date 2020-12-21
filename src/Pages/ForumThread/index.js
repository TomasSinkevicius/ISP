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
import Comments from '../../Components/Comments/index.js';
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import {useFirebase} from "../../Context/firebase/FirebaseContext";


const ForumThreadScreen = () => {

	const history = useHistory();
	const location = useLocation();
	
	var name = location.state

	const { getAllThreads } = useFirebase();

	const [loading, setLoading] = useState(true);
	const [threads, setThreads] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getAllThreads();
			
			var neWd = [];

			for(let thread of res)
			{
				if(thread.author == name)
				{
					neWd.push(thread)
				}
			}
			

			setThreads(neWd);
			console.log({neWd});
			setLoading(false);
		};
		fetchData();


		
		
	}, []);



	

	return loading ? null : (
        <div>
			<Header />
			
			{threads.map((item) => (
	
				<div className='forum-screen-container'>
				<h1 className='forum-screen-title'>{item.title}</h1>
				<div className='forum-screen-sections-container'>
					<div className='forum-screen-section'>
						<p className='forum-section-description'>
							{item.text}
						</p>
							{item.comments.map((comment) => (
								<div className='comment-section'>
									<div className='comment'>
										<div className='comment-author'>{item.author}</div>
										<div className='comment-text'>{comment}</div>
										<div className='star-rating'>
											<input type='radio' id='5-stars' name='rating' value='5' />
											<label for='5-stars' className='star'>
												&#9733;
											</label>
											<input type='radio' id='4-stars' name='rating' value='4' />
											<label for='4-stars' className='star'>
												&#9733;
											</label>
											<input type='radio' id='3-stars' name='rating' value='3' />
											<label for='3-stars' className='star'>
												&#9733;
											</label>
											<input type='radio' id='2-stars' name='rating' value='2' />
											<label for='2-stars' className='star'>
												&#9733;
											</label>
											<input type='radio' id='1-star' name='rating' value='1' />
											<label for='1-star' className='star'>
												&#9733;
											</label>
										</div>
									</div>

								</div>
							))}	

							<div className='write-comment'>
										<textarea
											placeholder='Write your comment here!'
											className='write-comment-text'
										></textarea>
										<button className='write-comment-button' type='button'>
											Comment
										</button>
									</div>

					</div>
				</div>
			</div>

			))}
			
		</div>
	);
};

export default ForumThreadScreen;