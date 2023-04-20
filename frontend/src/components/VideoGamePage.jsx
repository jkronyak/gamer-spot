import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoGamePage = () => {
  const { id } = useParams();

  const [gameData, setGameData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/games/${id}`
      );
      setGameData(data);
    };
    fetchData();
  }, [id]);

  if (!gameData || Object.keys(gameData).length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Video Game Page</h1>
      <h2>{gameData.name}</h2>
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
          <div>
            <a href={`/games/${game.id}`}>{game.name}</a>
          </div>
        );
      })}
      <h3>Screenshots</h3>
      {gameData.screenshots.map((screenshot) => {
        return <img src={screenshot} alt={gameData.name}></img>;
      })}
    </div>
  );
};

export default VideoGamePage;
