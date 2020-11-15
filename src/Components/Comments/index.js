import React from 'react';

const CommentSection = () => {
	return (
		<div className='comment-section'>
			<div className='comment'>
				<div className='comment-author'>Alex123</div>
				<div className='comment-text'>I think thats a great movie!</div>
				<div class='star-rating'>
					<input type='radio' id='5-stars' name='rating' value='5' />
					<label for='5-stars' class='star'>
						&#9733;
					</label>
					<input type='radio' id='4-stars' name='rating' value='4' />
					<label for='4-stars' class='star'>
						&#9733;
					</label>
					<input type='radio' id='3-stars' name='rating' value='3' />
					<label for='3-stars' class='star'>
						&#9733;
					</label>
					<input type='radio' id='2-stars' name='rating' value='2' />
					<label for='2-stars' class='star'>
						&#9733;
					</label>
					<input type='radio' id='1-star' name='rating' value='1' />
					<label for='1-star' class='star'>
						&#9733;
					</label>
				</div>
				<button className='comment-reply' type='button'>
					Reply
				</button>
			</div>

			<div className='write-comment'>
				<textarea
					placeholder='Write your comment here!'
					class='write-comment-text'
				></textarea>
				<button class='write-comment-button' type='button'>
					Comment
				</button>
			</div>
		</div>
	);
};

export default CommentSection;
