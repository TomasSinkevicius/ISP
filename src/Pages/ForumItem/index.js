import React, { useEffect, useState } from 'react';

import Header from '../../Components/Header/header.js';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useFirebase } from '../../Context/firebase/FirebaseContext';

const ForumItemScreen = () => {
	const history = useHistory();
	const location = useLocation();

	var name = location.state;

	const { getAllThreads } = useFirebase();

	const [loading, setLoading] = useState(true);
	const [threads, setThreads] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getAllThreads();

			var neWd = [];

			for (let thread of res) {
				if (thread.theme == name) {
					neWd.push(thread);
				}
			}

			setThreads(neWd);
			setLoading(false);
		};
		fetchData();
	}, []);

	return loading ? null : (
		<div>
			<Header />

			{threads.map((item) => (
				<div className='forum-screen-container'>
					<div className='forum-screen-sections-container'>
						<div className='forum-screen-section'>
							<h1 className='forum-section-title'>{item.title}</h1>
							<h3>Author:</h3>
							<h4>{item.author}</h4>

							<h3
								onClick={() =>
									history.push({
										pathname: `/forumthread/1`,
										state: item.author,
									})
								}
								className='forum-section-link'
							>
								View thread
							</h3>
						</div>
					</div>
				</div>
			))}

			<div className='forum-screen-container'>
				<div className='forum-screen-sections-container'>
					<h3
						onClick={() =>
							history.push({
								pathname: `/addthread/1`,
							})
						}
						className='forum-section-link'
					>
						+ New thread
					</h3>
				</div>
			</div>
		</div>
	);
};
export default ForumItemScreen;
