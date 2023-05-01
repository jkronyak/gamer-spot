import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Review from './Review';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


const VideoGamePage = () => {
  const { id } = useParams();

  const [gameData, setGameData] = useState({});
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const fetchGameData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/games/${id}`
      );
      setGameData(data);
    };
	const fetchReviewData = async () => { 
		const { data } = await axios.get(
			`${process.env.REACT_APP_BACKEND_URL}/reviews/${id}`
		);
		setReviewData(data);
	}
    fetchGameData();
	fetchReviewData();
  }, [id]);

  const handleReviewSubmit = async (e) => { 
	  e.preventDefault();
	  const reviewTitle = e.target.reviewTitle.value;
	  const reviewBody = e.target.reviewBody.value;
	  const rating = e.target.rating.value;
	  const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/reviews/${id}`, {
		  userId: cookies.get('userId'),
		  username: cookies.get('username'),
		  reviewTitle: reviewTitle,
		  reviewBody: reviewBody,
		  rating: rating
	  },
	  {
		  headers: {
			  Authorization: `Bearer ${cookies.get('token')}`
		  }
		}
	  );
	  console.log(response);
	  window.location.href = `/games/${id}`;
  }

  if (!gameData || Object.keys(gameData).length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{gameData.name}</h1>
      <img src={gameData.coverUrl} alt={gameData.name} />
      <p>Release Date: {gameData.release_date}</p>
      <p>{gameData.summary}</p>
      <p>Category: {gameData.category}</p>
      <h3>Genres</h3>
      {gameData.genres.map((genre) => (
        <p key={genre}>{genre}</p>
      ))}
      <h3>Similar Games</h3>
      {gameData.similar_games.map((game) => {
		  return (
			  <div key={`similar.${game.id}`}>
            <a href={`/games/${game.id}`}>{game.name}</a>
          </div>
        );
	})}
      <h3>Screenshots</h3>
      {gameData.screenshots.map((screenshot, idx) => {
		  return <img key={`screenshot.${idx}`} src={screenshot} alt={gameData.name}></img>;
		})}
		<h3>Reviews</h3>
		{reviewData.map((review) => {
			return <Review key={review._id} review={review} />
		})}
		{
			cookies.get('token') ? 
			<>
			<h3>Write a Review</h3>
			<div id='form-div'>
				<form id='create-review-form' onSubmit={(e) => handleReviewSubmit(e)}>
					<label htmlFor='reviewTitle'>Review Title</label>
					<input type='text' name='reviewTitle' id='reviewTitle'/>
					<label htmlFor='reviewBody'>Review Body</label>
					<textarea name='reviewBody' id='reviewBody' />
					<label htmlFor='rating'>Rating</label>
					<input type='number' min='1' max='5' name='rating' id='rating' />
					<button type='submit'>Submit Review</button>
				</form>
			</div>
			</>
			: <p>You must be logged in to post a review!</p>
		}
    </div>
  );
};

export default VideoGamePage;
