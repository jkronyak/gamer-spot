import React from 'react';

const Review = ({ review }) => { 
	return (
		<div>
			<h4>{review.reviewTitle}</h4>
			<p>{review.reviewBody}</p>
			<p>Rating: {review.rating}</p>
			<p>Posted By: {review.username}</p>
			<br/>
		</div>
	)
}

export default Review;